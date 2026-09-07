import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { weeklySchedule, scheduleNote, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Class Schedule | BJJ & Grappling Classes College Station",
  description:
    "View the weekly BJJ and grappling class schedule at Kinetic Grappling in College Station, TX. Kids, adult beginner, and No-Gi classes available.",
  path: "/schedule",
  keywords: ["BJJ class schedule College Station", "Grappling schedule College Station"],
});

const scheduleByDay = weeklySchedule.reduce<Record<string, typeof weeklySchedule>>((acc, entry) => {
  if (!acc[entry.day]) acc[entry.day] = [];
  acc[entry.day].push(entry);
  return acc;
}, {});

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Class Schedule"
        subtitle="Find the right class for your first visit. Not sure where to start? Adult beginners should start with Adult BJJ Fundamentals. Parents can choose Little Grapplers or Kids BJJ based on age."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Schedule" },
        ]}
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border border-brand-gold/25 bg-brand-gold/10 p-6 md:p-8">
            <p className="leading-relaxed text-brand-charcoal md:text-lg">
              <strong>Not sure where to start?</strong> Adult beginners should start with Adult BJJ
              Fundamentals. Parents can choose Little Grapplers or Kids BJJ based on age.{" "}
              {scheduleNote}{" "}
              <a href="/contact" className="font-semibold text-brand-gold-dark underline-offset-2 hover:underline">
                Book a free class
              </a>{" "}
              and we&apos;ll help you choose the right hour.
            </p>
          </div>

          <div className="mt-10 hidden overflow-hidden border border-black/5 bg-white md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-charcoal text-white">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider" scope="col">
                    Day
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider" scope="col">
                    Time
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider" scope="col">
                    Program
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider" scope="col">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((entry, i) => (
                  <tr key={`${entry.day}-${entry.time}-${i}`} className="border-b border-black/5 last:border-0">
                    <td className="px-6 py-4 text-sm font-medium text-brand-charcoal">{entry.day}</td>
                    <td className="px-6 py-4 text-sm text-brand-gray">{entry.time}</td>
                    <td className="px-6 py-4 text-sm text-brand-gray">{entry.program}</td>
                    <td className="px-6 py-4 text-sm text-brand-gray">{entry.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 space-y-6 md:hidden">
            {days.map((day) =>
              scheduleByDay[day] ? (
                <div key={day} className="border border-black/5 bg-white p-5">
                  <h3 className="font-display text-lg font-extrabold uppercase text-brand-charcoal">
                    {day}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {scheduleByDay[day].map((entry, i) => (
                      <li
                        key={`${entry.time}-${i}`}
                        className="flex flex-col border-t border-black/5 pt-3 first:border-0 first:pt-0"
                      >
                        <span className="font-semibold text-brand-gold-dark">{entry.time}</span>
                        <span className="text-brand-charcoal">{entry.program}</span>
                        <span className="text-sm text-brand-gray">{entry.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/contact">{siteConfig.primaryCta}</CTAButton>
            <CTAButton href="/programs" variant="outline">
              View All Programs
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Beginner Guidance" />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="border border-black/5 bg-white p-6">
              <h3 className="font-display text-lg font-extrabold uppercase text-brand-charcoal">
                Adult Beginners
              </h3>
              <p className="mt-2 leading-relaxed text-brand-gray">
                Start with <strong>Adult BJJ Fundamentals</strong>. These classes are designed for
                people with no prior experience and cover the core techniques and positions of
                Brazilian Jiu-Jitsu.
              </p>
            </article>
            <article className="border border-black/5 bg-white p-6">
              <h3 className="font-display text-lg font-extrabold uppercase text-brand-charcoal">
                Kids Classes
              </h3>
              <p className="mt-2 leading-relaxed text-brand-gray">
                Ages 3–5 should start with <strong>Little Grapplers</strong>. Ages 6–12 should start
                with <strong>Kids BJJ</strong>. Our team can help you choose during your first visit.
              </p>
            </article>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
