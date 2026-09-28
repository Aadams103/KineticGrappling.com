import Image from "next/image";
import { KidsSpotlight } from "@/components/KidsSpotlight";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ScheduleTeaser } from "@/components/ScheduleTeaser";
import { PricingTeaser } from "@/components/PricingTeaser";
import { FirstClassSection } from "@/components/FirstClassSection";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { ShareGym } from "@/components/ShareGym";
import { createPageMetadata } from "@/lib/metadata";
import { programs, coaches, homepageFaqs, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Brazilian Jiu-Jitsu & MMA in College Station, TX",
  description: "Train BJJ and MMA in College Station. Adult beginners and kids welcome. See Kinetic Grappling’s class schedule, membership prices, and free trial.",
  path: "/",
});

export default function HomePage() {
  const featured = ["kids-bjj", "adult-fundamentals", "no-gi"].map(slug => programs.find(program => program.slug === slug)!);
  const headCoach = coaches[0];
  return <>
    <Hero headline="Brazilian Jiu-Jitsu & MMA in College Station" subheadline="Give your child a place to learn. Give yourself a reason to get on the mats. Structured kids classes, adult fundamentals, and competition training in College Station and Bryan." />
    <KidsSpotlight />
    <ScheduleTeaser />
    <section className="bg-brand-paper py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Find your class" title="A place to start. Room to progress." subtitle="Adult fundamentals, structured kids classes, and no-gi grappling. Find the program that fits your next step." />
        <div className="grid gap-6 md:grid-cols-3">{featured.map(program => <ProgramCard key={program.slug} {...program} />)}</div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-black/10 pt-6">
          <span className="text-sm font-bold uppercase tracking-wider">Also at Kinetic</span>
          {programs.filter(program => !featured.includes(program)).map(program => <Link key={program.slug} href={program.learnMoreHref} className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">{program.title}</Link>)}
        </div>
      </div>
    </section>
    <FirstClassSection />
    <PricingTeaser />
    <section className="bg-brand-paper py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden bg-brand-charcoal">
          {headCoach.image && <Image src={headCoach.image} alt={headCoach.imageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />}
        </div>
        <div>
          <SectionHeading eyebrow="Meet your coach" title={headCoach.name} subtitle={headCoach.title} align="left" />
          <p className="text-lg font-semibold">{headCoach.rank}</p>
          <p className="mt-4 leading-relaxed text-brand-gray">{headCoach.bio}</p>
          <div className="mt-6"><CTAButton href="/coaches" variant="outline">Meet the coaching team</CTAButton></div>
          <div className="mt-8 border-t border-black/10 pt-6"><h3 className="font-display text-xl font-extrabold uppercase">Technical training. Shared progress.</h3><p className="mt-3 leading-relaxed text-brand-gray">Adults learn through instruction, drilling, and sparring. Kids ages 6–12 work on technique, listening, respect, and fitness. Students progressing beyond fundamentals can explore competition training.</p></div>
        </div>
      </div>
    </section>
    <section className="border-y border-black/10 bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div><p className="text-sm font-bold uppercase tracking-wider text-brand-red">Bring someone into the room</p><h2 className="font-display mt-3 text-3xl font-extrabold uppercase">Your next training partner knows you.</h2><p className="mt-4 max-w-xl leading-relaxed text-brand-gray">Send a friend one link with programs, class times, prices, and a free-trial starting point. Follow the academy for a closer look at Kinetic.</p></div>
        <div className="self-center"><ShareGym /><div className="mt-2 flex flex-wrap gap-5"><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Kinetic on Instagram</a><a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Kinetic on Facebook</a></div></div>
      </div>
    </section>
    <section className="bg-brand-paper py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Before you visit" title="Your first questions, answered." /><FAQAccordion faqs={homepageFaqs} /><Link href="/faq" className="mt-6 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">All beginner and parent questions</Link></div>
    </section>
    <LocationSection />
    <FinalCTA />
  </>;
}
