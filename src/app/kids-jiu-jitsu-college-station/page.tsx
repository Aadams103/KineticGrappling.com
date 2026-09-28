import Image from "next/image";
import Link from "next/link";
import { ProgramSchedule } from "@/components/ProgramSchedule";
import { KidsClassStructure } from "@/components/KidsClassStructure";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import { kidsParentFaqs } from "@/lib/kids-content";
import { programs, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Kids Jiu-Jitsu in College Station, TX",
  description: "Explore structured kids Jiu-Jitsu for ages 6–12 and Little Grapplers for ages 3–5. See class times, learn how classes work, and plan a first visit at Kinetic.",
  path: "/kids-jiu-jitsu-college-station",
});

export default function KidsJiuJitsuPage() {
  const kids = programs.find(program => program.slug === "kids-bjj")!;
  const little = programs.find(program => program.slug === "little-grapplers")!;
  return <>
    <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Kids Jiu-Jitsu" }])} />
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-3 text-sm"><Link href="/" className="inline-flex min-h-11 items-center underline">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Kids Jiu-Jitsu</span></nav>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">Kids Jiu-Jitsu · College Station</p>
            <h1 className="font-display mt-4 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Give them a place <br />to <span className="text-brand-red">keep trying.</span></h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-gray">Brazilian Jiu-Jitsu gives children skills to practice and challenges to work through. At Kinetic, the kids program focuses on technique, listening, respect, and fitness.</p>
            <div className="mt-6 flex flex-wrap gap-2"><span className="border border-brand-gray px-3 py-2 text-sm font-semibold">Kids Fundamentals · ages 6–12</span><span className="border border-brand-gray px-3 py-2 text-sm font-semibold">Little Grapplers · ages 3–5</span></div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><CTAButton href="/free-trial?program=kids-bjj#ask-a-coach">Plan your child’s first class</CTAButton><CTAButton href="#class-structure" variant="outline">See how they learn</CTAButton></div>
            <Link href="#program-class-times" className="mt-3 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">See kids class times →</Link>
          </div>
          <figure className="border border-black/10 bg-brand-paper">
            <Image src={kids.image} alt={kids.imageAlt} width={1920} height={1280} priority sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full" />
            <figcaption className="border-t border-black/10 px-5 py-4 text-sm text-brand-gray">Real students. Real practice. Kinetic Grappling.</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <ProgramSchedule program="kids-bjj" />
    <KidsClassStructure />
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="The right starting point" title="Different ages. Different ways to learn." subtitle="Choose an age group, then talk with the team about your child’s first visit." align="left" />
        <div className="grid gap-6 md:grid-cols-2">
          <article id="little-grapplers-details" className="border border-black/15 bg-brand-paper p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-gold-dark">{little.ages} · 30-minute introduction</p>
            <h3 className="font-display mt-3 text-3xl font-extrabold uppercase">{little.title}</h3>
            <p className="mt-4 leading-relaxed text-brand-gray">Games and playful activities introduce basic grappling skills, fitness, and confidence. This is a different learning format from the technique-focused class for older children.</p>
            <p className="mt-4 font-semibold">Ask about current class availability.</p>
            <div className="mt-6"><CTAButton href="/free-trial?program=little-grapplers#ask-a-coach" variant="outline">Ask about Little Grapplers</CTAButton></div>
          </article>
          <article className="border border-black/15 bg-brand-paper p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-gold-dark">{kids.ages} · Fundamentals</p>
            <h3 className="font-display mt-3 text-3xl font-extrabold uppercase">Kids Brazilian Jiu-Jitsu</h3>
            <p className="mt-4 leading-relaxed text-brand-gray">{kids.description} The regular sessions shown above give families a clear place to start.</p>
            <p className="mt-4 font-semibold">Technique takes the lead; games take a smaller role.</p>
            <div className="mt-6"><CTAButton href="/free-trial?program=kids-bjj#ask-a-coach">Plan a kids trial</CTAButton></div>
          </article>
        </div>
      </div>
    </section>
    <section className="bg-brand-charcoal py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <figure className="mx-auto w-full max-w-md">
          <Image src="/images/first-class.jpg" alt="A Kinetic coach guiding children through grappling practice" width={1600} height={1600} sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto w-full" />
          <figcaption className="pt-3 text-sm text-white/80">Coaching is part of the work, from the first visit.</figcaption>
        </figure>
        <div>
          <SectionHeading eyebrow="For parents" title="You don’t have to figure it out alone." subtitle="Start with a conversation about your child, then arrange the right first class." light align="left" />
          <ol className="space-y-5">
            <li><h3 className="text-lg font-bold">1. Tell us about your child</h3><p className="mt-1 leading-relaxed text-white/80">Share their age, any training experience, and what you’d like to ask the coach.</p></li>
            <li><h3 className="text-lg font-bold">2. Confirm a first visit</h3><p className="mt-1 leading-relaxed text-white/80">Use the trial page for Glofox registration or a class inquiry. An inquiry alone does not reserve a place.</p></li>
            <li><h3 className="text-lg font-bold">3. Come ready to learn</h3><p className="mt-1 leading-relaxed text-white/80">Bring workout clothes and water. Ask about borrowing a gi, and arrive early enough to meet the coach.</p></li>
          </ol>
          <div className="mt-7"><CTAButton href="/free-trial?program=kids-bjj#ask-a-coach">Let’s plan their first class</CTAButton></div>
          <Link href="/membership" className="mt-3 inline-flex min-h-11 items-center text-white underline underline-offset-4">See membership options and fees</Link>
        </div>
      </div>
    </section>
    <section className="bg-brand-paper py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Before the first visit" title="Questions parents ask." /><FAQAccordion faqs={[...kidsParentFaqs]} /></div>
    </section>
    <FinalCTA headline="Their first class starts with you." description="Tell us a little about your child. We’ll help you work out the next step." ctaLabel="Plan a kids trial" ctaHref="/free-trial?program=kids-bjj#ask-a-coach" />
  </>;
}
