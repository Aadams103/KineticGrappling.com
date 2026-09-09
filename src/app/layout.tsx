import type { Metadata } from "next";
import { Exo_2, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd } from "@/components/JsonLd";
import { getLocalBusinessSchema } from "@/lib/schema";
import { brandAssets, siteConfig } from "@/lib/site-config";
import "./globals.css";

const display = Exo_2({
  subsets: ["latin"],
  variable: "--font-kinetic-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-kinetic-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Brazilian Jiu-Jitsu & MMA in College Station, TX | Kinetic Grappling",
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
  category: "sports",
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
      <body className={`${display.variable} ${body.variable} font-sans pb-20 md:pb-0`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
