import { Hero } from "@/components/Hero";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CoachCard } from "@/components/CoachCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ScheduleTeaser } from "@/components/ScheduleTeaser";
import { PricingTeaser } from "@/components/PricingTeaser";
import { FirstClassSection } from "@/components/FirstClassSection";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { getFAQSchema } from "@/lib/schema";
import {
  programs,
  coaches,
  testimonials,
  homepageFaqs,
  whyChooseItems,
  siteConfig,
} from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Brazilian Jiu-Jitsu Classes in College Station, TX | Kinetic Grappling",
  description:
    "Train Brazilian Jiu-Jitsu, no-gi grappling, kids martial arts, and self-defense at Kinetic Grappling in College Station, TX. Book your free class today.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFAQSchema(homepageFaqs)} />

      <Hero
        headline="Brazilian Jiu-Jitsu & Grappling Classes in College Station, TX"
        subheadline="Beginner-friendly training for kids, teens, and adults. Build confidence, fitness, discipline, and real self-defense skills in a clean, family-focused academy."
      />

      <BenefitsGrid />

      {/* Programs */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
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

      {/* Why Kinetic */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading title="Why Kinetic Grappling?" />
          <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {whyChooseItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-charcoal">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <CTAButton href="/about" variant="outline">Learn About Our Academy</CTAButton>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Meet the Coaches"
            subtitle="Skilled, approachable instructors who make Brazilian Jiu-Jitsu accessible for beginners, kids, and competitors."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/coaches" variant="outline">View All Coaches</CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Trusted by College Station Families & Students"
            subtitle="Real stories from parents, adult beginners, competitors, and families who train at Kinetic Grappling."
            light
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href={siteConfig.contactPath}>See Why Families Train With Us</CTAButton>
          </div>
        </div>
      </section>

      <ScheduleTeaser />
      <PricingTeaser />
      <FirstClassSection />

      {/* FAQ */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion faqs={homepageFaqs} />
          <div className="mt-8 text-center">
            <CTAButton href="/faq" variant="outline">View All FAQs</CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
