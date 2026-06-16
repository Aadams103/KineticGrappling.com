import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/programs",
    "/schedule",
    "/membership",
    "/coaches",
    "/about",
    "/contact",
    "/faq",
    "/blog",
    "/kids-jiu-jitsu-college-station",
    "/adult-bjj-college-station",
    "/no-gi-grappling-college-station",
    "/bjj-competition-training-college-station",
    "/private-jiu-jitsu-lessons-college-station",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/contact" ? "weekly" : "monthly",
    priority: route === "" || route === "/contact" ? 1 : 0.8,
  }));
}
