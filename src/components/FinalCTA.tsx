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
    <section className="bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
