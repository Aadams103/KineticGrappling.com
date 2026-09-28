import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(".next/server/app");
const origin = "https://www.kineticgrappling.com";
const read = file => readFileSync(file, "utf8");
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const attribute = (tag, name) => decode(tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1] ?? "");
const pages = new Map(files(root).filter(file => file.endsWith(".html") && !file.endsWith("_not-found.html")).map(file => {
  const route = "/" + path.relative(root, file).replace(/\.html$/, "").replace(/^index$/, "");
  return [route, read(file)];
}));
const titles = new Set();
const descriptions = new Set();
let linkCount = 0;
let imageCount = 0;
let schemaCount = 0;
for (const [route, html] of pages) {
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "");
  assert.ok(title && !titles.has(title), `Missing/duplicate title: ${route}`);
  titles.add(title);
  const metas = [...html.matchAll(/<meta\s[^>]*>/g)].map(match => match[0]);
  const description = attribute(metas.find(tag => attribute(tag, "name") === "description") ?? "", "content");
  assert.ok(description && !descriptions.has(description), `Missing/duplicate description: ${route}`);
  descriptions.add(description);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `H1 count: ${route}`);
  const canonicalTag = [...html.matchAll(/<link\s[^>]*>/g)].map(match => match[0]).find(tag => attribute(tag, "rel") === "canonical");
  assert.equal(new URL(attribute(canonicalTag ?? "", "href")).pathname, route, `Canonical: ${route}`);
  for (const property of ["og:title", "og:description", "og:image", "og:url"]) {
    assert.ok(metas.some(tag => attribute(tag, "property") === property && attribute(tag, "content")), `Missing ${property}: ${route}`);
  }
  for (const match of html.matchAll(/<a\s[^>]*>/g)) {
    const href = attribute(match[0], "href");
    if (!href || /^(mailto:|tel:)/.test(href)) continue;
    const url = new URL(href, origin + route);
    if (url.origin !== origin) continue;
    const target = pages.get(url.pathname);
    assert.ok(target || existsSync(path.join("public", url.pathname)), `Broken link ${route} -> ${href}`);
    if (url.hash && target) assert.ok(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor ${route} -> ${href}`);
    linkCount++;
  }
  for (const match of html.matchAll(/<img\s[^>]*>/g)) {
    assert.ok(/\salt=/.test(match[0]), `Image missing alt: ${route}`);
    const src = attribute(match[0], "src");
    const url = new URL(src, origin);
    const file = url.pathname === "/_next/image" ? url.searchParams.get("url") : url.pathname;
    if (file?.startsWith("/") && !file.startsWith("/_next/")) assert.ok(existsSync(path.join("public", file)), `Missing image ${file}: ${route}`);
    imageCount++;
  }
  for (const match of html.matchAll(/<script\s[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    const schema = JSON.parse(match[1]);
    assert.equal(schema["@context"], "https://schema.org", `Schema context: ${route}`);
    assert.ok(schema["@type"] || schema["@graph"], `Schema type: ${route}`);
    schemaCount++;
  }
}
const sitemap = read(path.join(root, "sitemap.xml.body"));
const indexed = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(decode(match[1])).pathname);
assert.deepEqual(new Set(indexed), new Set(pages.keys()), "Sitemap differs from public routes");
assert.ok(read(path.join(root, "robots.txt.body")).includes(`Sitemap: ${origin}/sitemap.xml`));
const redirects = JSON.parse(read(".next/routes-manifest.json")).redirects;
for (const [source, destination] of [["/about-us-1", "/about"], ["/about-8", "/coaches#ambrose-adams"], ["/calendar", "/schedule"]]) {
  const redirect = redirects.find(item => item.source === source);
  assert.equal(redirect?.destination, destination);
  assert.equal(redirect?.statusCode, 308);
  const target = new URL(destination, origin);
  assert.ok(pages.has(target.pathname));
  if (target.hash) assert.ok(pages.get(target.pathname).includes(`id="${target.hash.slice(1)}"`));
}
console.log(JSON.stringify({ pages: pages.size, internalLinks: linkCount, images: imageCount, jsonLdBlocks: schemaCount, sitemapUrls: indexed.length, legacyRedirects: 3, result: "passed" }, null, 2));
