import { weeklySchedule, type ProgramSlug, type ScheduleEntry, type ScheduleDiscipline } from "./site-config";

const programDisciplines: Partial<Record<ProgramSlug, ScheduleDiscipline>> = {
  "adult-fundamentals": "BJJ", "kids-bjj": "Kids", "no-gi": "No-Gi", competition: "Competition",
};

export function scheduleForProgram(program: ProgramSlug): ScheduleEntry[] {
  const discipline = programDisciplines[program];
  return discipline ? weeklySchedule.filter(entry => entry.discipline === discipline) : [];
}

export function trialHref(entry: ScheduleEntry) {
  const program = entry.discipline === "Kids" ? "kids-bjj" : entry.discipline === "No-Gi" ? "no-gi" : entry.discipline === "Competition" ? "competition" : "adult-fundamentals";
  const params = new URLSearchParams({ program, class: `${entry.day} · ${entry.program} · ${entry.time} Central` });
  return `/free-trial?${params.toString()}`;
}
