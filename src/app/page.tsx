import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CoachCard } from "@/components/CoachCard";
import { FAQAccordion } from "@/components/FAQAccordion";
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
  startSteps,
  weeklySchedule,
  siteConfig,
  brandAssets,
} from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Brazilian Jiu-Jitsu College Station, TX | Kids & Adult BJJ | Kinetic Grappling",
  description:
    "Train Brazilian Jiu-Jitsu in College Station at Kinetic Grappling. Kids classes, adult beginner BJJ, No-Gi grappling, private lessons, and free trial classes available.",
  path: "/",
});

const homepagePrograms = programs.filter((p) => p.slug !== "competition");

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFAQSchema(homepageFaqs)} />

      <Hero
        headline="Brazilian Jiu-Jitsu in College Station, TX for Kids, Adults & Beginners"
        subheadline="Build confidence, fitness, discipline, and real self-defense skills in a clean, family-friendly academy. Start with a free trial class at Kinetic Grappling."
        trustLine="Beginner-friendly classes • Kids programs • Adult BJJ • No-Gi grappling • Private lessons • College Station, TX"
      />

      {/* Social Proof */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Trusted by College Station Students & Families"
            subtitle="Whether you're bringing your child in for their first martial arts class or stepping onto the mat as an adult beginner, Kinetic Grappling is built to help you feel welcome, supported, and challenged."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading title="Find the Right Jiu-Jitsu Program for You or Your Child" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homepagePrograms.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading title="Start Training in 3 Easy Steps" />
          <div className="grid gap-8 md:grid-cols-3">
            {startSteps.map((step) => (
              <div key={step.step} className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-xl font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-brand-charcoal">{step.title}</h3>
                <p className="mt-3 text-brand-gray leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/free-trial">Book My Free Trial</CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-brand-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Why Choose Kinetic Grappling?"
            light
          />
          <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {whyChooseItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/90">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Coaches Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Meet the Coaches"
            subtitle="Experienced, approachable instructors who make Brazilian Jiu-Jitsu accessible for beginners, kids, and competitors alike."
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

      {/* Schedule Preview */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Weekly Class Schedule"
            subtitle="Not sure where to start? Adult beginners should start with Adult BJJ Fundamentals. Parents can choose Little Grapplers or Kids BJJ based on age."
          />
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-gray-100 bg-brand-charcoal text-white">
                    <th className="px-6 py-4 text-sm font-semibold" scope="col">Day</th>
                    <th className="px-6 py-4 text-sm font-semibold" scope="col">Time</th>
                    <th className="px-6 py-4 text-sm font-semibold" scope="col">Program</th>
                    <th className="px-6 py-4 text-sm font-semibold" scope="col">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.slice(0, 6).map((entry, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="px-6 py-4 text-sm font-medium text-brand-charcoal">{entry.day}</td>
                      <td className="px-6 py-4 text-sm text-brand-gray">{entry.time}</td>
                      <td className="px-6 py-4 text-sm text-brand-gray">{entry.program}</td>
                      <td className="px-6 py-4 text-sm text-brand-gray">{entry.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/schedule">{siteConfig.secondaryCta}</CTAButton>
          </div>
        </div>
      </section>

      {/* First Class */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="What to Expect at Your First Class"
                align="left"
              />
              <p className="text-lg leading-relaxed text-brand-gray">
                Your first class should feel simple, welcoming, and low-pressure. Wear comfortable workout clothes, bring water, and arrive a few minutes early. A coach will help you get started, explain where to go, and guide you through the class. You do not need experience, a gi, or elite fitness to begin.
              </p>
              <div className="mt-8">
                <CTAButton href="/free-trial">{siteConfig.primaryCta}</CTAButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-light">
              <Image
                src={brandAssets.firstClassImage}
                alt={brandAssets.firstClassAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion faqs={homepageFaqs} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
