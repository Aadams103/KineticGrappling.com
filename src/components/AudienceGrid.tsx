import { audiences } from "@/lib/site-config";
import { SectionHeading } from "./SectionHeading";
import { CTAButton } from "./CTAButton";
import { siteConfig } from "@/lib/site-config";

export function AudienceGrid() {
  return (
    <section className="bg-brand-charcoal py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who trains here"
          title="A Gym for College Station Families & Students"
          subtitle="Kids, adult beginners, Aggies, and competitors share the same mats — with coaching that meets you where you are."
          light
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article key={audience.title} className="border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-lg font-bold uppercase text-white">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{audience.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href={siteConfig.contactPath}>{siteConfig.primaryCta}</CTAButton>
        </div>
      </div>
    </section>
  );
}
