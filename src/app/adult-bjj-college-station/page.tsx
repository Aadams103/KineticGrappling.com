import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { getFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { FAQ } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Adult Brazilian Jiu-Jitsu College Station, TX | Beginner BJJ",
  description:
    "Beginner-friendly adult BJJ in College Station, TX. No experience required. Get in shape, learn self-defense, and train in a supportive environment at Kinetic Grappling.",
  path: "/adult-bjj-college-station",
  keywords: [
    "Adult BJJ College Station",
    "Beginner Brazilian Jiu-Jitsu College Station",
    "BJJ for adults College Station",
    "Adult martial arts College Station",
  ],
});

const adultBenefits = [
  {
    title: "No Experience Required",
    description: "Our fundamentals classes start from zero. You do not need a martial arts background to begin training.",
  },
  {
    title: "Get in Shape",
    description: "BJJ is a full-body workout that builds strength, cardio, flexibility, and functional fitness while you learn real skills.",
  },
  {
    title: "Learn Self-Defense",
    description: "Brazilian Jiu-Jitsu teaches practical control, escapes, and submissions that work for real-world self-defense.",
  },
  {
    title: "Reduce Stress",
    description: "Focused training on the mat is one of the best ways to disconnect from daily stress and recharge mentally.",
  },
  {
    title: "Supportive Environment",
    description: "Train with partners who help you learn — not overwhelm you. Our culture is welcoming, not intimidating.",
  },
  {
    title: "Never Too Late to Start",
    description: "Students of all ages and fitness levels train with us. You do not need to be in shape before you start — you get in shape by training.",
  },
];

const adultFaqs: FAQ[] = [
  {
    question: "I'm completely out of shape. Can I still start?",
    answer: "Absolutely. Many of our adult students started with little to no fitness background. You train at your own pace and build conditioning over time.",
  },
  {
    question: "Am I too old to start BJJ?",
    answer: "No. We have adult students across a wide age range. Fundamentals classes are structured for safe, progressive learning regardless of age.",
  },
  {
    question: "Do I need a gi for my first class?",
    answer: "No. Wear comfortable workout clothes for your first visit. We will explain gi requirements if you decide to continue.",
  },
  {
    question: "Which class should I try first?",
    answer: "Start with Adult BJJ Fundamentals. These classes are designed specifically for beginners and all experience levels.",
  },
];

export default function AdultBJJPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(adultFaqs)} />

      <PageHero
        title="Adult Brazilian Jiu-Jitsu in College Station, TX"
        subtitle="Beginner-friendly Brazilian Jiu-Jitsu for adults who want fitness, self-defense, confidence, and a supportive training community. No experience required."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Adult BJJ" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-light order-2 lg:order-1">
              <Image
                src="/images/adult-bjj-class.jpg"
                alt="Adult BJJ training in College Station Texas at Kinetic Grappling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Brazilian Jiu-Jitsu Built for Adult Beginners"
                subtitle="Whether you are a Texas A&M student, a Bryan/College Station professional, or a parent looking for your own fitness outlet — our adult BJJ program meets you where you are."
                align="left"
              />
              <CTAButton href="/contact?program=adult-fundamentals">
                {siteConfig.primaryCta}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading title="Why Adults Choose Kinetic Grappling" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adultBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand-charcoal">{benefit.title}</h3>
                <p className="mt-2 text-brand-gray leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <SectionHeading title="Adult BJJ Fundamentals" />
          <p className="text-lg text-brand-gray leading-relaxed">
            Our fundamentals classes cover the core positions, movements, and techniques of Brazilian Jiu-Jitsu in a structured, beginner-friendly format. You will learn alongside other adults at similar experience levels with coaches who break everything down step by step.
          </p>
          <div className="mt-8">
            <CTAButton href="/schedule">View Class Schedule</CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading title="Adult BJJ FAQ" />
          <FAQAccordion faqs={adultFaqs} />
        </div>
      </section>

      <FinalCTA
        headline="Start Your BJJ Journey Today"
        description="Book your free class at Kinetic Grappling in College Station, TX. Bring workout clothes and a water bottle — we'll help with the rest."
      />
    </>
  );
}
