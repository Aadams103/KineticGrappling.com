import { PageHero } from "@/components/PageHero";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({ title: "Reviews & Student Stories in College Station", description: "Read current public feedback about Kinetic Grappling and learn what to look for when choosing a BJJ academy in College Station.", path: "/reviews" });
export default function ReviewsPage() { return <>
  <PageHero title="Reviews & Student Stories" subtitle="Trust should come from real students, real parents, and verifiable public feedback—not anonymous marketing copy." breadcrumb={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
  <section className="bg-brand-paper py-16 md:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-6 md:grid-cols-3">{["Does the coaching style make sense to you?", "Can you see yourself attending the schedule consistently?", "Does the room feel right for you or your child?"].map((item, index) => <article key={item} className="border border-black/10 bg-white p-6"><span className="font-display text-4xl font-extrabold text-brand-gold">0{index + 1}</span><h2 className="mt-4 font-display text-xl font-extrabold uppercase">{item}</h2></article>)}</div>
    <div className="mt-10 border-l-4 border-brand-red bg-brand-light p-7"><h2 className="font-display text-2xl font-extrabold uppercase">See current public feedback</h2><p className="mt-3 max-w-2xl text-brand-gray">No review text or rating is reproduced here until its source and permission are verified. Use the Google listing for the current public record, then try a class and judge the academy firsthand.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><CTAButton href={siteConfig.social.googleMaps} external>Open Google listing</CTAButton><CTAButton href="/free-trial" variant="outline">Start free trial</CTAButton></div></div>
  </div></section>
  </>; }
