import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/programs",
    "/schedule",
    "/membership",
    "/coaches",
    "/about",
    "/contact",
    "/free-trial",
    "/reviews",
    "/faq",
    "/blog",
    "/kids-jiu-jitsu-college-station",
    "/adult-bjj-college-station",
    "/no-gi-grappling-college-station",
    "/mma-college-station",
    "/wrestling-college-station",
    "/bjj-competition-training-college-station",
    "/private-jiu-jitsu-lessons-college-station",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" || route === "/contact" ? "weekly" : "monthly",
    priority: route === "" || route === "/contact" ? 1 : 0.8,
  }));
}
