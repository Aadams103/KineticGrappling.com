import Link from "next/link";
import { CTAButton } from "./CTAButton";

interface FinalCTAProps {
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function FinalCTA({
  headline = "Ready to Start Training?",
  description = "Book your free trial class today and experience beginner-friendly Brazilian Jiu-Jitsu in College Station, TX.",
  ctaLabel = "Book a Free Trial Class",
  ctaHref = "/free-trial",
}: FinalCTAProps) {
  return (
    <section className="bg-brand-red">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={ctaHref} variant="white">
            {ctaLabel}
          </CTAButton>
          <Link
            href="/schedule"
            className="text-base font-semibold text-white underline-offset-4 hover:underline"
          >
            View Class Schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
