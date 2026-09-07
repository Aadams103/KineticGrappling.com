import { CTAButton } from "./CTAButton";
import { memberships } from "@/lib/site-config";

export function PricingTeaser() {
  return <section className="bg-brand-charcoal py-16 text-white md:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Transparent starting prices</p><h2 className="font-display mt-3 text-3xl font-extrabold uppercase md:text-5xl">Know the number before you visit.</h2></div><CTAButton href="/membership" variant="white">See pricing details</CTAButton></div>
    <div className="mt-9 grid gap-px bg-white/15 md:grid-cols-3">{memberships.map((plan) => <div key={plan.name} className="bg-brand-charcoal p-6"><p className="text-sm font-bold uppercase tracking-wider text-white/65">{plan.name}</p><p className="mt-2"><span className="font-display text-4xl font-extrabold text-brand-gold">{plan.price}</span> <span className="text-white/60">/ month</span></p></div>)}</div>
  </div></section>;
}
