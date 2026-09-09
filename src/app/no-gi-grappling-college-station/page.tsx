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
  title: "No-Gi Grappling College Station, TX | Submission Grappling Classes",
  description:
    "No-Gi Jiu-Jitsu and submission grappling classes in College Station, TX. Fast-paced training focused on control, takedowns, escapes, and submissions at Kinetic Grappling.",
  path: "/no-gi-grappling-college-station",
  keywords: [
    "No-Gi Jiu-Jitsu College Station",
    "Submission grappling College Station",
    "Grappling classes College Station",
    "No-Gi BJJ College Station",
  ],
});

const noGiFocus = [
  {
    title: "Control & Position",
    description: "Learn to establish and maintain dominant positions without relying on gi grips.",
  },
  {
    title: "Takedowns",
    description: "Develop wrestling-style entries and takedowns that transition smoothly into ground control.",
  },
  {
    title: "Escapes",
    description: "Build reliable escape systems from bad positions using movement, frames, and timing.",
  },
  {
    title: "Submissions",
    description: "Train chokes, arm locks, and leg attacks adapted for no-gi grips and faster scrambles.",
  },
  {
    title: "Wrestling Transitions",
    description: "Connect standing grappling to ground work with fluid, competitive transitions.",
  },
  {
    title: "Faster-Paced Training",
    description: "Experience dynamic rounds with less friction and more movement than traditional gi training.",
  },
];

const noGiFaqs: FAQ[] = [
  {
    question: "Do I need gi experience before trying No-Gi?",
    answer:
      "Fundamentals experience is helpful but not always required. Talk to our coaches about the best starting point for your experience level.",
  },
  {
    question: "What should I wear to No-Gi class?",
    answer:
      "Wear a rash guard or fitted athletic shirt and board shorts or spats. Avoid pockets, zippers, and loose clothing.",
  },
  {
    question: "Is No-Gi harder than gi training?",
    answer:
      "No-Gi tends to be faster-paced with fewer grip stoppages. Both styles build complementary skills and many students train both.",
  },
  {
    question: "Can beginners try No-Gi?",
    answer:
      "We recommend building a fundamentals base first, but motivated beginners can discuss options with our coaching team during a free trial.",
  },
];

export default function NoGiPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(noGiFaqs)} />

      <PageHero
        title="No-Gi Grappling in College Station, TX"
        subtitle="Fast-paced submission grappling focused on control, takedowns, escapes, and submissions — without the traditional gi."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "No-Gi Grappling" },
        ]}
        imageSrc="/images/no-gi-grappling.jpg"
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Dynamic Grappling Without the Gi"
                subtitle="Our No-Gi classes in College Station combine Jiu-Jitsu technique with wrestling-style movement for a faster, more athletic training experience."
                align="left"
              />
              <CTAButton href="/free-trial?program=no-gi">{siteConfig.primaryCta}</CTAButton>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-light">
              <Image
                src="/images/no-gi-grappling.jpg"
                alt="No-Gi grappling class at Kinetic Grappling in College Station, TX"
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
          <SectionHeading title="What You'll Train in No-Gi" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {noGiFocus.map((item) => (
              <div key={item.title} className="border border-black/5 bg-white p-6">
                <h3 className="font-display text-lg font-extrabold uppercase text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="No-Gi FAQ" />
          <FAQAccordion faqs={noGiFaqs} />
        </div>
      </section>

      <FinalCTA
        headline="Experience No-Gi Grappling"
        description="Book a No-Gi class at Kinetic Grappling and see why submission grappling is one of the fastest-growing martial arts in College Station."
      />
    </>
  );
}
