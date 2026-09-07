import Image from "next/image";
import { Hero } from "@/components/Hero";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { CoachCard } from "@/components/CoachCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ScheduleTeaser } from "@/components/ScheduleTeaser";
import { PricingTeaser } from "@/components/PricingTeaser";
import { FirstClassSection } from "@/components/FirstClassSection";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { AudienceGrid } from "@/components/AudienceGrid";
import { createPageMetadata } from "@/lib/metadata";
import { getFAQSchema } from "@/lib/schema";
import {
  academyCopy,
  programs,
  coaches,
  homepageFaqs,
  whyChooseItems,
  siteConfig,
} from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Brazilian Jiu-Jitsu & MMA in College Station, TX",
  description:
    "Brazilian Jiu-Jitsu, MMA, no-gi, wrestling, and kids classes in College Station, TX. See current class times, pricing, and start a free trial.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFAQSchema(homepageFaqs)} />

      <Hero
        headline="Brazilian Jiu-Jitsu & MMA in College Station"
        subheadline="BJJ, no-gi, wrestling, and MMA for adults and kids across College Station and Bryan—with dedicated fundamentals classes for new students."
      />

      <section className="border-b border-black/5 bg-brand-paper py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold-dark">
              {academyCopy.welcome}
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold uppercase tracking-tight text-brand-charcoal md:text-5xl">
              {academyCopy.tagline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-gray">{academyCopy.intro}</p>
            <p className="mt-4 leading-relaxed text-brand-gray">{academyCopy.findYourFit}</p>
            <div className="mt-8">
              <CTAButton href={siteConfig.contactPath}>{siteConfig.primaryCta}</CTAButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/adult-bjj-class.jpg"
              alt="Adult Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <ScheduleTeaser />

      <BenefitsGrid />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programs"
            title="Programs for Kids, Teens & Adults"
            subtitle="Whether you're enrolling your child or stepping on the mat for the first time as an adult, we have a structured path for you."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/programs" variant="outline">
              View All Programs
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The academy" title="Why Kinetic Grappling?" />
          <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {whyChooseItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-charcoal">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <CTAButton href="/about" variant="outline">
              Learn About Our Academy
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coaches"
            title="Meet the Coaches"
            subtitle="Skilled, approachable instructors who make Brazilian Jiu-Jitsu accessible for beginners, kids, and competitors."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/coaches" variant="outline">
              View All Coaches
            </CTAButton>
          </div>
        </div>
      </section>

      <AudienceGrid />
      <PricingTeaser />
      <FirstClassSection />

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
          <FAQAccordion faqs={homepageFaqs} />
          <div className="mt-8 text-center">
            <CTAButton href="/faq" variant="outline">
              View All FAQs
            </CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
