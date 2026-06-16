import Image from "next/image";
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
  title: "Kids Jiu-Jitsu College Station, TX | Kids BJJ & Martial Arts",
  description:
    "Kids Jiu-Jitsu and martial arts classes in College Station, TX. Build confidence, discipline, focus, and anti-bullying skills at Kinetic Grappling. Free trial available.",
  path: "/kids-jiu-jitsu-college-station",
  keywords: [
    "Kids Jiu-Jitsu College Station",
    "Kids martial arts College Station",
    "Kids BJJ College Station",
    "Children's Brazilian Jiu-Jitsu",
  ],
});

const parentBenefits = [
  {
    title: "Confidence",
    description: "Kids learn to believe in themselves through achievable goals, positive coaching, and visible progress on the mat.",
  },
  {
    title: "Discipline & Focus",
    description: "Structured classes teach listening skills, following directions, and staying engaged — skills that carry over to school and home.",
  },
  {
    title: "Respect",
    description: "Students learn to respect coaches, training partners, and themselves in a positive team environment.",
  },
  {
    title: "Anti-Bullying Confidence",
    description: "Practical grappling skills and situational awareness help children feel more confident handling difficult social situations.",
  },
  {
    title: "Fitness & Coordination",
    description: "Age-appropriate movement builds strength, coordination, and healthy habits in a fun, active setting.",
  },
  {
    title: "Safe Structure",
    description: "Classes are supervised by experienced coaches with clear rules, controlled training, and a family-friendly culture.",
  },
];

const kidsFaqs: FAQ[] = [
  {
    question: "What age can my child start?",
    answer: "We offer Little Grapplers for ages 3–5 and Kids Brazilian Jiu-Jitsu for ages 6–12. Choose based on your child's age and readiness.",
  },
  {
    question: "Is Jiu-Jitsu safe for children?",
    answer: "Yes. Our kids classes use age-appropriate techniques, close supervision, and a focus on control and respect. Safety is always our top priority.",
  },
  {
    question: "What should my child wear?",
    answer: "Comfortable athletic clothes and a water bottle. A gi is not required for the first class — we will guide you on what to bring afterward.",
  },
  {
    question: "Will my child need to compete?",
    answer: "No. Competition is optional. Most kids train for confidence, fitness, and fun. Competition pathways are available for students who want them.",
  },
];

export default function KidsJiuJitsuPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(kidsFaqs)} />

      <PageHero
        title="Kids Jiu-Jitsu in College Station, TX"
        subtitle="Help your child build confidence, discipline, focus, and respect through structured Brazilian Jiu-Jitsu training in a safe, positive environment."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Kids Jiu-Jitsu" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Martial Arts Training Parents Trust"
                subtitle="Kinetic Grappling offers kids martial arts in College Station designed for real development — not just activity. Our coaches are positive role models who teach practical skills in a family-friendly academy."
                align="left"
              />
              <CTAButton href="/free-trial?program=kids-bjj">
                Schedule Your Child&apos;s Free Trial
              </CTAButton>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-light">
              <Image
                src="/images/kids-bjj-class.jpg"
                alt="Kids Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading title="What Parents Love About Our Kids Programs" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {parentBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand-charcoal">{benefit.title}</h3>
                <p className="mt-2 text-brand-gray leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading title="Our Kids Programs" />
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">Ages 3–5</span>
              <h3 className="mt-4 text-2xl font-bold text-brand-charcoal">Little Grapplers</h3>
              <p className="mt-3 text-brand-gray leading-relaxed">
                Fun movement-based classes that build coordination, listening skills, confidence, and basic grappling awareness through games and structured activities.
              </p>
              <div className="mt-6">
                <CTAButton href="/free-trial?program=little-grapplers">Book a Kids Free Trial</CTAButton>
              </div>
            </article>
            <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">Ages 6–12</span>
              <h3 className="mt-4 text-2xl font-bold text-brand-charcoal">Kids Brazilian Jiu-Jitsu</h3>
              <p className="mt-3 text-brand-gray leading-relaxed">
                Structured BJJ training that builds discipline, focus, confidence, respect, and practical self-defense skills in a positive team environment.
              </p>
              <div className="mt-6">
                <CTAButton href="/free-trial?program=kids-bjj">Schedule Your Child&apos;s Free Trial</CTAButton>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading title="Kids Program FAQ" />
          <FAQAccordion faqs={kidsFaqs} />
        </div>
      </section>

      <FinalCTA
        headline="Give Your Child a Confident Start"
        description="Schedule a free trial class and see why College Station families choose Kinetic Grappling for kids Jiu-Jitsu."
        ctaLabel="Schedule Your Child's Free Trial"
      />
    </>
  );
}
