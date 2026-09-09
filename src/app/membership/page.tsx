import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { dataVerification, memberships, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "BJJ Membership Pricing in College Station",
  description: "See current monthly adult, kids, and family Brazilian Jiu-Jitsu membership pricing at Kinetic Grappling in College Station, TX.",
  path: "/membership",
});

export default function MembershipPage() {
  return <>
    <PageHero title="Membership & Pricing" subtitle="See the current public starting prices before you visit. Try a class first, then choose the plan that fits who is training." breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
    <section className="bg-brand-paper py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {memberships.map((plan) => <article key={plan.name} className="relative overflow-hidden border border-black/10 bg-white p-7">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-gold" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">{plan.name}</p>
            <p className="mt-5"><span className="font-display text-5xl font-extrabold">{plan.price}</span> <span className="text-brand-gray">{plan.cadence}</span></p>
            <p className="mt-2 text-sm font-semibold text-brand-gray">{plan.fee}</p>
            <p className="mt-5 leading-relaxed text-brand-gray">{plan.description}</p>
          </article>)}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-l-4 border-brand-red bg-brand-light p-6 md:flex-row md:items-center">
          <div><p className="font-bold">Final billing terms are shown at checkout.</p><p className="mt-1 text-sm text-brand-gray">{dataVerification.pricing}</p></div>
          <CTAButton href={siteConfig.booking.memberships} external>See all billing options</CTAButton>
        </div>
      </div>
    </section>
    <section className="bg-brand-charcoal py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Start before you commit</p><h2 className="font-display mt-3 text-3xl font-extrabold uppercase">The trial is currently free.</h2><p className="mt-4 text-white/70">The public Glofox portal lists three free trial credits, valid for one month. Use the trial page if you want Kinetic to recommend your first class.</p></div><div className="flex flex-col gap-3 sm:flex-row md:justify-end"><CTAButton href="/free-trial">Start free trial</CTAButton><CTAButton href="/schedule" variant="white">View schedule</CTAButton></div></div>
    </section>
  </>;
}
