import { scheduleCategories, scheduleNote, siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function ScheduleTeaser() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Weekly classes"
          title="Class Schedule Overview"
          subtitle="Find a class that fits. Adult beginners start with Teen / Adult BJJ Fundamentals. Parents choose Little Grapplers or Kids BJJ by age."
        />
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-brand-gray">{scheduleNote}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scheduleCategories.map((cat) => (
            <article key={cat.name} className="border border-black/5 bg-white p-6">
              <h3 className="font-display text-lg font-bold uppercase text-brand-charcoal">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-gold-dark">{cat.times}</p>
              <p className="mt-2 text-sm text-brand-gray">{cat.ages}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/schedule">{siteConfig.secondaryCta}</CTAButton>
        </div>
      </div>
    </section>
  );
}
