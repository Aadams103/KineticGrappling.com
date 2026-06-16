import { trustBadges } from "@/lib/site-config";

export function TrustBadges() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Academy highlights">
      {trustBadges.map((badge) => (
        <li
          key={badge}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
