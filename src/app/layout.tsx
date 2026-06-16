import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd } from "@/components/JsonLd";
import { getLocalBusinessSchema } from "@/lib/schema";
import { brandAssets, siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Brazilian Jiu-Jitsu Classes in College Station, TX | Kinetic Grappling",
    template: "%s | Kinetic Grappling",
  },
  description: siteConfig.description,
  keywords: [
    "Brazilian Jiu-Jitsu College Station",
    "BJJ College Station",
    "Kids Jiu-Jitsu College Station",
    "Adult BJJ College Station",
    "No-Gi grappling College Station",
    "Martial arts College Station",
    "Self-defense classes College Station",
    "Bryan College Station Jiu-Jitsu",
    "BJJ near Texas A&M",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: brandAssets.favicon,
    apple: brandAssets.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={getLocalBusinessSchema()} />
      </head>
      <body className={`${inter.variable} font-sans pb-20 md:pb-0`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
