"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { trialHref } from "@/lib/schedule";
import type { ScheduleDiscipline, ScheduleEntry } from "@/lib/site-config";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const filters: Array<"All" | ScheduleDiscipline> = ["All", "BJJ", "No-Gi", "Kids", "Power Hour", "Competition", "Open Mat"];

function duration(entry: ScheduleEntry) {
  const minutes = (value: string) => { const [hour, minute] = value.split(":").map(Number); return hour * 60 + minute; };
  return minutes(entry.end) - minutes(entry.start);
}

export function ScheduleExplorer({ entries, compact = false }: { entries: ScheduleEntry[]; compact?: boolean }) {
  const [currentDay, setCurrentDay] = useState<string | null>(null);
  const [selectedDay, setDay] = useState<string | null>(null);
  const day = selectedDay ?? (compact ? currentDay ?? "All" : "All");
  useEffect(() => {
    const update = () => setCurrentDay(new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", weekday: "long" }).format(new Date()));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const [discipline, setDiscipline] = useState<"All" | ScheduleDiscipline>("All");
  const visible = useMemo(() => entries.filter((entry) => (day === "All" || entry.day === day) && (discipline === "All" || entry.discipline === discipline)), [entries, day, discipline]);
  const grouped = days.map((name) => ({ name, entries: visible.filter((entry) => entry.day === name) })).filter((group) => group.entries.length || day === group.name);

  return <div>
    <p className="mb-4 text-sm font-semibold text-brand-gray">All times are Central Time (College Station).</p>
    <div className="flex flex-wrap gap-2 pb-2" role="group" aria-label="Filter schedule by day">
      {!compact && <Filter active={day === "All"} onClick={() => setDay("All")}>All week</Filter>}
      {days.map((name) => <Filter key={name} active={day === name} onClick={() => setDay(name)}>{name === currentDay ? `Today · ${name.slice(0, 3)}` : name.slice(0, 3)}</Filter>)}
    </div>
    {!compact && <div className="mt-4 flex flex-wrap gap-2 pb-2" role="group" aria-label="Filter schedule by program">
      {filters.map((name) => <Filter key={name} active={discipline === name} onClick={() => setDiscipline(name)}>{name}</Filter>)}
    </div>}
    {grouped.length === 0 && <p className="mt-6 text-brand-gray" role="status">No classes match these filters. Choose another day or program.</p>}
    <div className={`mt-6 grid gap-4 ${compact ? "" : "lg:grid-cols-2"}`}>
      {grouped.map((group) => <section key={group.name} className="border border-black/10 bg-white" aria-labelledby={`schedule-${group.name}`}>
        <div className="flex items-center justify-between border-b border-black/10 bg-brand-charcoal px-5 py-3 text-white">
          <h3 id={`schedule-${group.name}`} className="font-display font-extrabold uppercase tracking-wide">{group.name}</h3>
          {group.name === currentDay && <span className="rounded-full bg-brand-red px-2 py-1 text-xs font-bold uppercase">Today</span>}
        </div>
        {group.entries.length ? <ul>{group.entries.map((entry) => <li key={`${entry.day}-${entry.start}-${entry.program}`} className="border-b border-black/5 p-5 last:border-0">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4"><div className="min-w-0"><p className="font-bold text-brand-charcoal">{entry.program}</p><p className="mt-1 text-sm text-brand-gray">{entry.level} · {entry.discipline}</p></div><div className="shrink-0 sm:text-right"><p className="font-semibold text-brand-red">{entry.time}</p><p className="mt-1 text-sm text-brand-gray">{duration(entry)} minutes</p></div></div>
          {entry.trialEligible && <Link href={trialHref(entry)} className="mt-3 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-wider underline decoration-brand-gold decoration-2 underline-offset-4">Ask about this class<span className="sr-only"> on {entry.day} at {entry.time}</span></Link>}
        </li>)}</ul> : <p className="p-5 text-brand-gray">No regularly listed classes for this filter. Check Glofox for date-specific changes.</p>}
      </section>)}
    </div>
  </div>;
}

function Filter({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button type="button" aria-pressed={active} onClick={onClick} className={`min-h-11 shrink-0 border px-4 py-2 text-sm font-bold ${active ? "border-brand-charcoal bg-brand-charcoal text-white" : "border-brand-gray bg-white hover:border-brand-charcoal"}`}>{children}</button>;
}
