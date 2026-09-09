import Link from "next/link";
import { scheduleForProgram, trialHref } from "@/lib/schedule";
import { dataVerification, type ProgramSlug } from "@/lib/site-config";

export function ProgramSchedule({ program }: { program: ProgramSlug }) {
  const entries = scheduleForProgram(program);
  if (!entries.length) return null;
  return <section className="border-b border-black/10 bg-white py-9" aria-labelledby="program-class-times">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3"><h2 id="program-class-times" className="font-display text-2xl font-extrabold uppercase">Class times · Central Time</h2><Link href="/schedule" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Full weekly schedule</Link></div>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{entries.map(entry => <li key={`${entry.day}-${entry.start}`} className="border-l-4 border-brand-red bg-brand-paper p-4"><p className="font-bold">{entry.day} · {entry.time}</p><p className="mt-1 text-sm text-brand-gray">{entry.program}</p><Link href={trialHref(entry)} className="mt-2 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Ask about this class<span className="sr-only"> on {entry.day} at {entry.time}</span></Link></li>)}</ul>
      <p className="mt-4 text-sm text-brand-gray">{dataVerification.schedule}</p>
    </div>
  </section>;
}
