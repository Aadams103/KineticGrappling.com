import { ScheduleExplorer } from "./ScheduleExplorer";
import { CTAButton } from "./CTAButton";
import { weeklySchedule } from "@/lib/site-config";

export function ScheduleTeaser() {
  return <section className="bg-brand-light py-16 md:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-red">Train this week</p><h2 className="font-display mt-3 text-3xl font-extrabold uppercase md:text-5xl">Today’s classes</h2><p className="mt-3 max-w-2xl text-brand-gray">Choose a day below, then ask the team to confirm your first class. Check Glofox for date-specific changes.</p></div><CTAButton href="/schedule" variant="outline">Full weekly schedule</CTAButton></div>
    <ScheduleExplorer entries={weeklySchedule} compact />
  </div></section>;
}
