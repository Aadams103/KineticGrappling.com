import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { TrustBadges } from "./TrustBadges";
import { brandAssets, siteConfig } from "@/lib/site-config";

interface HeroProps {
  headline: string;
  subheadline: string;
  showBadges?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  headline,
  subheadline,
  showBadges = true,
  primaryCta = { label: siteConfig.primaryCta, href: siteConfig.contactPath },
  secondaryCta = { label: siteConfig.secondaryCta, href: "/schedule" },
  imageSrc = brandAssets.heroImage,
  imageAlt = brandAssets.heroAlt,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-black">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-gold">
            College Station, TX · Bryan · Brazos Valley
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
            {subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            <CTAButton href={secondaryCta.href} variant="outline" className="!border-white/40 !text-white hover:!bg-white hover:!text-brand-black">
              {secondaryCta.label}
            </CTAButton>
          </div>

          {showBadges && <TrustBadges />}
        </div>
      </div>
    </section>
  );
}
