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
      <div className="relative min-h-64 border-t border-white/15 lg:border-l lg:border-t-0">
        <Image src={brandAssets.heroImage} alt={brandAssets.heroAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
        <div className="absolute inset-x-0 bottom-0 bg-brand-black/85 p-4 text-sm font-semibold tracking-wide">Real training. Your local team.</div>
      </div>
    </div>
  </section>;
}
