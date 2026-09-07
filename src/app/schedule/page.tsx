import { PageHero } from "@/components/PageHero";
import { ScheduleExplorer } from "@/components/ScheduleExplorer";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { dataVerification, siteConfig, weeklySchedule } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "BJJ, No-Gi & Kids Class Schedule in College Station",
  description: "See Kinetic Grappling's weekly BJJ, no-gi, kids, conditioning, open mat, and competition schedule in College Station, TX.",
  path: "/schedule",
});

export default function SchedulePage() {
  return <>
    <PageHero title="Class Schedule" subtitle="Choose a day or filter by training type. Adult beginners should look for Adult Gi BJJ Fundamentals; children ages 6–12 can start with Kids BJJ Fundamentals." breadcrumb={[{ label: "Home", href: "/" }, { label: "Schedule" }]} />
    <section className="bg-brand-paper py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 border-l-4 border-brand-red bg-white p-5 md:flex-row md:items-center">
          <div><p className="font-bold">Schedules can change for holidays, events, and seasonal programming.</p><p className="mt-1 text-sm text-brand-gray">{dataVerification.schedule}</p></div>
          <CTAButton href={siteConfig.booking.glofox} external>Check live booking</CTAButton>
        </div>
        <ScheduleExplorer entries={weeklySchedule} />
      </div>
    </section>
  </>;
}
