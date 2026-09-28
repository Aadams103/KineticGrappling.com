import type { Metadata } from "next";
import { brandAssets, programs, siteConfig } from "./site-config";

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
  const program = programs.find(item => item.learnMoreHref === path);
  const image = program?.image ?? brandAssets.heroImage;
  const imageAlt = program?.imageAlt ?? brandAssets.heroAlt;

  return {
    title: path === "/" ? { absolute: `${title} | ${siteConfig.name}` } : title,
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
          url: image,
          type: "image/jpeg",
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
