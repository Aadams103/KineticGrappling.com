import type { Metadata } from "next";
import { brandAssets, siteConfig } from "./site-config";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [
      "Brazilian Jiu-Jitsu College Station",
      "BJJ College Station",
      "Kinetic Grappling",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: brandAssets.heroImage,
          width: 1200,
          height: 630,
          alt: "Kinetic Grappling Brazilian Jiu-Jitsu academy in College Station TX",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
