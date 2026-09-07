"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ScheduleDiscipline, ScheduleEntry } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const filters: Array<"All" | ScheduleDiscipline> = ["All", "BJJ", "No-Gi", "Kids", "Conditioning", "Competition", "Open Mat"];

export function ScheduleExplorer({ entries, compact = false }: { entries: ScheduleEntry[]; compact?: boolean }) {
  const todayIndex = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", weekday: "short" }).format(new Date());
  const currentDay = ({ Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" } as Record<string, string>)[todayIndex] || "Monday";
  const [day, setDay] = useState(compact ? currentDay : "All");
  const [discipline, setDiscipline] = useState<"All" | ScheduleDiscipline>("All");
  const visible = useMemo(() => entries.filter((entry) => (day === "All" || entry.day === day) && (discipline === "All" || entry.discipline === discipline)), [entries, day, discipline]);
  const grouped = days.map((name) => ({ name, entries: visible.filter((entry) => entry.day === name) })).filter((group) => group.entries.length || day === group.name);

  return <div>
    <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter schedule by day">
      {!compact && <Filter active={day === "All"} onClick={() => setDay("All")}>All week</Filter>}
      {days.map((name) => <Filter key={name} active={day === name} onClick={() => setDay(name)}>{name === currentDay ? `Today · ${name.slice(0, 3)}` : name.slice(0, 3)}</Filter>)}
    </div>
    {!compact && <div className="mt-4 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter schedule by program">
      {filters.map((name) => <Filter key={name} active={discipline === name} onClick={() => setDiscipline(name)}>{name}</Filter>)}
    </div>}
    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      {grouped.map((group) => <section key={group.name} className="border border-black/10 bg-white" aria-labelledby={`schedule-${group.name}`}>
        <div className="flex items-center justify-between border-b border-black/10 bg-brand-charcoal px-5 py-3 text-white">
          <h3 id={`schedule-${group.name}`} className="font-display font-extrabold uppercase tracking-wide">{group.name}</h3>
          {group.name === currentDay && <span className="rounded-full bg-brand-red px-2 py-1 text-xs font-bold uppercase">Today</span>}
        </div>
        {group.entries.length ? <ul>{group.entries.map((entry) => <li key={`${entry.day}-${entry.start}-${entry.program}`} className="border-b border-black/5 p-5 last:border-0">
          <div className="flex items-start justify-between gap-4"><div><p className="font-bold text-brand-charcoal">{entry.program}</p><p className="mt-1 text-sm text-brand-gray">{entry.level} · {entry.discipline}</p></div><time className="shrink-0 font-semibold text-brand-red">{entry.time}</time></div>
          {entry.trialEligible && <Link href={`/free-trial?program=${entry.discipline === "Kids" ? "kids-bjj" : entry.discipline === "No-Gi" ? "no-gi" : "adult-fundamentals"}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-wider underline decoration-brand-gold decoration-2 underline-offset-4" onClick={() => trackEvent("free_trial_cta_click", { class_name: entry.program })}>Try this class</Link>}
        </li>)}</ul> : <p className="p-5 text-brand-gray">No regularly listed classes for this filter. Check Glofox for date-specific changes.</p>}
      </section>)}
    </div>
  </div>;
}

function Filter({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button type="button" aria-pressed={active} onClick={onClick} className={`min-h-11 shrink-0 border px-4 py-2 text-sm font-bold ${active ? "border-brand-gold bg-brand-gold text-brand-black" : "border-black/15 bg-white hover:border-brand-charcoal"}`}>{children}</button>;
}
