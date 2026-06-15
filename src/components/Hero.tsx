import Image from "next/image";
import { CTAButton } from "./CTAButton";

interface HeroProps {
  headline: string;
  subheadline: string;
  trustLine?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  headline,
  subheadline,
  trustLine,
  primaryCta = { label: "Book a Free Trial Class", href: "/free-trial" },
  secondaryCta = { label: "View Class Schedule", href: "/schedule" },
  imageSrc = "/images/hero-training.svg",
  imageAlt = "Brazilian Jiu-Jitsu training at Kinetic Grappling in College Station, TX",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-red">
            College Station, TX • Bryan/College Station • Near Texas A&amp;M
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
            {subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            <CTAButton href={secondaryCta.href} variant="white">
              {secondaryCta.label}
            </CTAButton>
          </div>

          {trustLine && (
            <p className="mt-8 text-sm font-medium text-white/70 md:text-base">
              {trustLine}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
