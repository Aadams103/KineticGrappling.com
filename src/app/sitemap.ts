import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/programs",
    "/kids-jiu-jitsu-college-station",
    "/adult-bjj-college-station",
    "/no-gi-grappling-college-station",
    "/schedule",
    "/coaches",
    "/membership",
    "/free-trial",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" || route === "/free-trial" ? 1 : 0.8,
  }));
}
