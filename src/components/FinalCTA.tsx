import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";

interface FinalCTAProps {
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function FinalCTA({
  headline = "Ready to Try Brazilian Jiu-Jitsu?",
  description = "Book your free class today. Bring workout clothes and a water bottle — we'll help with the rest.",
  ctaLabel = siteConfig.primaryCta,
  ctaHref = siteConfig.contactPath,
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
          Train for free today
        </p>
        <h2 className="font-display mt-4 text-3xl font-extrabold uppercase text-white md:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-h-[52px] items-center justify-center rounded-sm border-2 border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
