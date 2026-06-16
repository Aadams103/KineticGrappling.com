import { scheduleCategories, siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function ScheduleTeaser() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Class Schedule Overview"
          subtitle="Find a class that fits your schedule. Adult beginners should start with Teen / Adult BJJ Fundamentals. Parents can choose Little Grapplers or Kids BJJ based on age."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scheduleCategories.map((cat) => (
            <article
              key={cat.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-brand-charcoal">{cat.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-gold">{cat.times}</p>
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
