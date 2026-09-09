import { trustBadges } from "@/lib/site-config";

export function TrustBadges() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Academy highlights">
      {trustBadges.map((badge) => (
        <li
          key={badge}
          className="rounded-sm border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
