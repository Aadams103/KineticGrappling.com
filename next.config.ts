import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      { source: "/about-us-1", destination: "/about", permanent: true },
      { source: "/about-8", destination: "/coaches#ambrose-adams", permanent: true },
      { source: "/calendar", destination: "/schedule", permanent: true },
    ];
  },
};

export default nextConfig;
