import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { TrustBadges } from "./TrustBadges";
import { brandAssets, siteConfig } from "@/lib/site-config";

export function Hero({ headline, subheadline }: { headline: string; subheadline: string }) {
  return <section className="bg-brand-black text-white">
    <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.1fr_1fr]">
      <div className="px-4 py-10 sm:px-6 sm:py-14 lg:py-16 lg:pl-8 lg:pr-10">
        <p className="border-l-4 border-brand-red pl-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">College Station · Bryan, Texas</p>
        <h1 className="font-display mt-5 text-[clamp(2.25rem,4.4vw,4rem)] font-extrabold uppercase leading-[1.03] tracking-tight">{headline}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{subheadline}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/free-trial">Start your free trial</CTAButton>
          <CTAButton href="/schedule" variant="white">Class schedule</CTAButton>
        </div>
        <TrustBadges />
        <a href={siteConfig.social.googleMaps} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center text-sm text-white/75 underline underline-offset-4">{siteConfig.address.full}</a>
      </div>
      <figure className="flex flex-col justify-center border-t border-white/15 bg-brand-charcoal lg:border-l lg:border-t-0">
        <Image src={brandAssets.heroImage} alt={brandAssets.heroAlt} width={2400} height={2400} priority sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full" />
        <figcaption className="border-t border-white/15 px-5 py-4 text-sm font-semibold text-white/85">Your first class. Your next challenge. Your team.</figcaption>
      </figure>
    </div>
  </section>;
}
