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
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 border-l-4 border-brand-red pl-3 text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
            College Station · Bryan · Brazos Valley
          </p>
          <h1 className="font-display max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            {subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            <CTAButton
              href={secondaryCta.href}
              variant="outline"
              className="!border-white/35 !text-white hover:!bg-white hover:!text-brand-black"
            >
              {secondaryCta.label}
            </CTAButton>
          </div>

          {showBadges && <TrustBadges />}
        </div>
      </div>
    </section>
  );
}
