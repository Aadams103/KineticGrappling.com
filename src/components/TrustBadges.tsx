import { trustBadges } from "@/lib/site-config";

export function TrustBadges() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-2" aria-label="Academy highlights">
      {trustBadges.map((badge) => (
        <li
          key={badge}
          className="rounded-sm border border-white/15 px-3 py-2 text-sm font-semibold text-white"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
