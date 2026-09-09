import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Free BJJ Trial Class in College Station",
  description: "Request a free Brazilian Jiu-Jitsu trial at Kinetic Grappling in College Station. Adults, kids, and beginners are welcome.",
  path: "/free-trial",
});

export default function FreeTrialPage() {
  return <>
    <PageHero title="Start Your Free Trial" subtitle="Tell us who will train and when you can attend. The coaching team can confirm the best first class before you arrive." breadcrumb={[{ label: "Home", href: "/" }, { label: "Free Trial" }]} />
    <section className="bg-brand-paper py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <aside>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">Your first visit</p>
          <h2 className="font-display mt-3 text-3xl font-extrabold uppercase">Four steps. No guesswork.</h2>
          <ol className="mt-7 space-y-5">
            {["Choose a program or ask for help.", "Kinetic confirms the right class.", "Bring workout clothes and water.", "Arrive early and meet your coach."].map((step, i) => <li key={step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-gold font-display font-extrabold">{i + 1}</span><span className="pt-1 font-semibold">{step}</span></li>)}
          </ol>
          <div className="mt-8 border-t border-black/10 pt-6"><p className="text-sm text-brand-gray">The public Glofox portal currently lists a free trial with three class credits valid for one month.</p><div className="mt-4"><CTAButton href={siteConfig.booking.memberships} external variant="outline">Open Glofox trial</CTAButton></div></div>
        </aside>
        <div className="border border-black/10 bg-white p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,.7)] md:p-9">
          <h2 className="font-display text-2xl font-extrabold uppercase">Request your first class</h2>
          <p className="mt-2 mb-7 text-brand-gray">Only the information needed to contact you and choose a class.</p>
          <Suspense fallback={<p>Loading form…</p>}><ContactForm deliveryEnabled={Boolean(process.env.RESEND_API_KEY && process.env.TRIAL_FORM_FROM_EMAIL)} /></Suspense>
        </div>
      </div>
    </section>
  </>;
}
