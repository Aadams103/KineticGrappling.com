import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function PricingTeaser() {
  return (
    <section className="bg-brand-paper py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="Plans for Individuals & Families"
        />
        <p className="text-lg leading-relaxed text-brand-gray">
          Membership options are available for individuals and families. Start with a free class
          and we&apos;ll help you choose the right plan based on your goals, schedule, and training
          frequency.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={siteConfig.contactPath}>{siteConfig.primaryCta}</CTAButton>
          <CTAButton href="/membership" variant="outline">
            View Membership Info
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
