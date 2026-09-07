import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { getFAQSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Membership & Getting Started | Kinetic Grappling",
  description:
    "Start training at Kinetic Grappling in College Station, TX with a free class. Learn about membership options, family plans, and what's included.",
  path: "/membership",
  keywords: ["BJJ membership College Station", "Martial arts membership College Station"],
});

const membershipFaqs: FAQ[] = [
  {
    question: "How do I get started?",
    answer:
      "Book a free class. After your first visit, our team will help you choose the membership option that fits your goals, schedule, and family.",
  },
  {
    question: "Do you offer family memberships?",
    answer:
      "Yes. We offer family membership options for households with multiple students. Ask our team about family pricing after your first class.",
  },
  {
    question: "What's included in membership?",
    answer:
      "Membership includes access to your program's scheduled classes, open mat sessions, and the supportive training community at Kinetic Grappling.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "Our team will walk you through membership options after your first class. We focus on finding the right fit rather than pushing long commitments upfront.",
  },
  {
    question: "Can I switch programs?",
    answer:
      "Yes. Many students explore different programs as they progress. Our coaches can help you adjust your training plan.",
  },
];

const includedItems = [
  "Access to scheduled program classes",
  "Open mat training sessions",
  "Experienced coaching and supervision",
  "Clean, family-friendly training environment",
  "Supportive team culture",
  "Progression through structured curriculum",
  "Competition pathway for dedicated students",
  "Flexible membership guidance after your first class",
];

export default function MembershipPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(membershipFaqs)} />

      <PageHero
        title="Start Training at Kinetic Grappling"
        subtitle="The best way to begin is with a free class. After your first visit, our team will help you choose the membership option that fits your goals, schedule, and family."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Membership" },
        ]}
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="border border-black/5 bg-white p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-brand-gold font-display text-lg font-extrabold text-brand-black">
                1
              </span>
              <h2 className="font-display mt-4 text-xl font-extrabold uppercase text-brand-charcoal">
                Start with a Free Class
              </h2>
              <p className="mt-3 leading-relaxed text-brand-gray">
                Experience our academy, meet our coaches, and try a class before making any
                commitment. No pressure — just a welcoming first visit.
              </p>
              <div className="mt-6">
                <CTAButton href="/contact">Book a Free Class</CTAButton>
              </div>
            </article>
            <article className="border border-black/5 bg-white p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-brand-gold font-display text-lg font-extrabold text-brand-black">
                2
              </span>
              <h2 className="font-display mt-4 text-xl font-extrabold uppercase text-brand-charcoal">
                Choose the Right Program
              </h2>
              <p className="mt-3 leading-relaxed text-brand-gray">
                Whether you need kids Jiu-Jitsu, adult fundamentals, No-Gi, or private lessons —
                our team helps you find the best fit for your goals.
              </p>
              <div className="mt-6">
                <CTAButton href="/programs" variant="outline">
                  View Programs
                </CTAButton>
              </div>
            </article>
            <article className="border border-black/5 bg-white p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-brand-gold font-display text-lg font-extrabold text-brand-black">
                3
              </span>
              <h2 className="font-display mt-4 text-xl font-extrabold uppercase text-brand-charcoal">
                Select Your Membership
              </h2>
              <p className="mt-3 leading-relaxed text-brand-gray">
                After your first class, we will walk you through membership options including
                individual and family plans tailored to your schedule.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Membership Options" />
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-gray">
            We offer flexible membership options for individuals and families. Pricing is discussed
            in person after your free class so we can recommend the plan that actually fits your
            training goals — not a one-size-fits-all package.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {["Individual Membership", "Family Membership", "Private Lessons"].map((option) => (
              <div key={option} className="border border-black/5 bg-white p-6 text-center">
                <h3 className="font-display text-lg font-extrabold uppercase text-brand-charcoal">
                  {option}
                </h3>
                <p className="mt-2 text-sm text-brand-gray">Details provided after your free class</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What's Included" />
          <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-gray">
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
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Membership FAQ" />
          <FAQAccordion faqs={membershipFaqs} />
        </div>
      </section>

      <FinalCTA ctaLabel="Book a Free Class" />
    </>
  );
}
