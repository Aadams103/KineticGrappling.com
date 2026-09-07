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
  title: "Kids Brazilian Jiu-Jitsu College Station, TX | Kids Martial Arts",
  description:
    "Kids Brazilian Jiu-Jitsu and martial arts classes in College Station, TX. Build confidence, discipline, focus, and anti-bullying skills at Kinetic Grappling. Book a free class today.",
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
    description:
      "Kids learn to believe in themselves through achievable goals, positive coaching, and visible progress on the mat.",
  },
  {
    title: "Discipline & Focus",
    description:
      "Structured classes teach listening skills, following directions, and staying engaged — skills that carry over to school and home.",
  },
  {
    title: "Respect",
    description:
      "Students learn to respect coaches, training partners, and themselves in a positive team environment.",
  },
  {
    title: "Anti-Bullying Confidence",
    description:
      "Practical grappling skills and situational awareness help children feel more confident handling difficult social situations.",
  },
  {
    title: "Fitness & Coordination",
    description:
      "Age-appropriate movement builds strength, coordination, and healthy habits in a fun, active setting.",
  },
  {
    title: "Safe Structure",
    description:
      "Classes are supervised by experienced coaches with clear rules, controlled training, and a family-friendly culture.",
  },
];

const kidsFaqs: FAQ[] = [
  {
    question: "What age can my child start?",
    answer:
      "We offer Little Grapplers for ages 3–5 and Kids Brazilian Jiu-Jitsu for ages 6–12. Choose based on your child's age and readiness.",
  },
  {
    question: "Is Jiu-Jitsu safe for children?",
    answer:
      "Yes. Our kids classes use age-appropriate techniques, close supervision, and a focus on control and respect. Safety is always our top priority.",
  },
  {
    question: "What should my child wear?",
    answer:
      "Comfortable athletic clothes and a water bottle. A gi is not required for the first class — we will guide you on what to bring afterward.",
  },
  {
    question: "Will my child need to compete?",
    answer:
      "No. Competition is optional. Most kids train for confidence, fitness, and fun. Competition pathways are available for students who want them.",
  },
];

export default function KidsJiuJitsuPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(kidsFaqs)} />

      <PageHero
        title="Kids Brazilian Jiu-Jitsu in College Station, TX"
        subtitle="Help your child build confidence, discipline, focus, and respect through structured Brazilian Jiu-Jitsu training in a safe, positive environment."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Kids Jiu-Jitsu" },
        ]}
        imageSrc="/images/kids-bjj-class.jpg"
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Martial Arts Training Parents Trust"
                subtitle="Kinetic Grappling offers kids martial arts in College Station designed for real development — not just activity. Our coaches are positive role models who teach practical skills in a family-friendly academy."
                align="left"
              />
              <CTAButton href="/contact?program=kids-bjj">{siteConfig.primaryCta}</CTAButton>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-light">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Parents Love About Our Kids Programs" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {parentBenefits.map((benefit) => (
              <div key={benefit.title} className="border border-black/5 bg-white p-6">
                <h3 className="font-display text-lg font-extrabold uppercase text-brand-charcoal">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Kids Programs" />
          <div className="grid gap-8 md:grid-cols-2">
            <article className="border border-black/5 bg-white p-8">
              <span className="rounded-sm bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                Ages 3–5
              </span>
              <h3 className="font-display mt-4 text-2xl font-extrabold uppercase text-brand-charcoal">
                Little Grapplers
              </h3>
              <p className="mt-3 leading-relaxed text-brand-gray">
                A 30-minute class built around games and fun scenarios. Kids develop fitness,
                confidence, listening skills, and their first grappling awareness.
              </p>
              <div className="mt-6">
                <CTAButton href="/contact?program=little-grapplers">{siteConfig.primaryCta}</CTAButton>
              </div>
            </article>
            <article className="border border-black/5 bg-white p-8">
              <span className="rounded-sm bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                Ages 6–12
              </span>
              <h3 className="font-display mt-4 text-2xl font-extrabold uppercase text-brand-charcoal">
                Kids Brazilian Jiu-Jitsu
              </h3>
              <p className="mt-3 leading-relaxed text-brand-gray">
                Structured BJJ training that builds discipline, focus, confidence, respect, and
                practical self-defense skills in a positive team environment.
              </p>
              <div className="mt-6">
                <CTAButton href="/contact?program=kids-bjj">{siteConfig.primaryCta}</CTAButton>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Kids Program FAQ" />
          <FAQAccordion faqs={kidsFaqs} />
        </div>
      </section>

      <FinalCTA
        headline="Give Your Child a Confident Start"
        description="Book a free class and see why College Station families choose Kinetic Grappling for kids Jiu-Jitsu."
      />
    </>
  );
}
