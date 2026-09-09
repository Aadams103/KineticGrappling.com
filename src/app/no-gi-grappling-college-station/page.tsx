import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import type { FAQ } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "No-Gi Fundamentals in College Station",
  description:
    "Explore No-Gi Fundamentals at Kinetic Grappling in College Station. Contact the coaching team to confirm class format, eligibility, and your starting point.",
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
      "Kinetic's current No-Gi eligibility requirements need confirmation. Tell the coaches your experience level and ask which class is appropriate before attending.",
  },
  {
    question: "What should I wear to No-Gi class?",
    answer:
      "No-gi grappling generally uses fitted athletic clothing instead of a gi. Ask the coach to confirm the clothing and equipment required for your first class.",
  },
  {
    question: "Is No-Gi harder than gi training?",
    answer:
      "No-Gi tends to be faster-paced with fewer grip stoppages. Both styles build complementary skills and many students train both.",
  },
  {
    question: "Can beginners try No-Gi?",
    answer:
      "Ask the coaching team to confirm whether the current No-Gi class accepts beginners and trial students. The listed program does not specify eligibility.",
  },
];

export default function NoGiPage() {
  return (
    <>

      <PageHero
        title="No-Gi Grappling in College Station, TX"
        subtitle="Kinetic lists No-Gi Fundamentals among its programs. Contact the coaching team to confirm the current class structure and eligibility."
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
                subtitle="No-gi grappling uses athletic clothing instead of the traditional gi. Ask Kinetic's coaches how the current Fundamentals program is organized and where you should start."
                align="left"
              />
              <CTAButton href="/free-trial?program=no-gi">Ask About No-Gi</CTAButton>
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
          <SectionHeading title="Common No-Gi Concepts" subtitle="These concepts describe the discipline generally. Ask the coach which are covered in the current Fundamentals class." />
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
        description="Contact Kinetic Grappling to confirm the No-Gi class format, eligibility, and availability before arranging your visit."
      />
    </>
  );
}
