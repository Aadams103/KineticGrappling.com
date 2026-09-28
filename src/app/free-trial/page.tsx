import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Free BJJ Trial in College Station",
  description: "Start a free trial at Kinetic Grappling in College Station. Register through Glofox, see class times, or ask a coach about adult and kids BJJ.",
  path: "/free-trial",
});

export default function FreeTrialPage() {
  return <>
    <PageHero title="Your first class starts here." subtitle="Ready to train? Open Kinetic’s registration portal. Need help choosing a class for yourself or your child? Ask the coaching team below." breadcrumb={[{ label: "Home", href: "/" }, { label: "Free Trial" }]} />
    <section className="bg-brand-paper py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-l-4 border-brand-red bg-white p-6 md:grid-cols-[1.2fr_1fr] md:p-9">
          <div><p className="text-sm font-bold uppercase tracking-wider text-brand-red">Ready to get started</p><h2 className="font-display mt-3 text-3xl font-extrabold uppercase">Register for your free trial</h2><p className="mt-4 leading-relaxed text-brand-gray">Kinetic uses Glofox for memberships and class booking. The portal lists a free trial with three class credits valid for one month. Review current terms and eligible classes there before registering.</p></div>
          <div className="flex flex-col justify-center gap-3"><CTAButton href={siteConfig.booking.memberships} external analyticsEvent="trial_booking_click">Open free-trial registration</CTAButton><CTAButton href="/schedule" variant="outline">Choose a class time</CTAButton><p className="text-sm text-brand-gray">Registration opens in Glofox. A request sent below does not reserve a class.</p></div>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <aside><p className="text-sm font-bold uppercase tracking-wider text-brand-red">Before you arrive</p><h2 className="font-display mt-3 text-2xl font-extrabold uppercase">Know your first step.</h2>
            <ol className="mt-6 space-y-5">{["Pick a class from the weekly schedule.", "Complete booking or confirm your visit with a coach.", "Wear workout clothes and bring water.", "Arrive early enough to meet your coach."].map((step, i) => <li key={step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-gold font-display font-extrabold">{i + 1}</span><span className="pt-1 font-semibold">{step}</span></li>)}</ol>
            <address className="mt-8 border-t border-black/10 pt-6 not-italic"><p className="font-semibold">{siteConfig.address.full}</p><a className="mt-2 inline-flex min-h-11 items-center underline" href={siteConfig.social.googleMaps} target="_blank" rel="noreferrer">Get directions</a><p>Questions? <a className="inline-flex min-h-11 items-center underline" href={siteConfig.phoneHref}>{siteConfig.phone}</a></p></address>
          </aside>
          <div id="ask-a-coach" className="border border-black/10 bg-white p-6 md:p-9"><h2 className="font-display text-2xl font-extrabold uppercase">Need help choosing? Ask a coach.</h2><p className="mb-7 mt-2 text-brand-gray">Tell us who will train and when you can attend.</p><Suspense fallback={<p>Loading form…</p>}><ContactForm deliveryEnabled={Boolean(process.env.RESEND_API_KEY && process.env.TRIAL_FORM_FROM_EMAIL)} /></Suspense></div>
        </div>
      </div>
    </section>
  </>;
}
