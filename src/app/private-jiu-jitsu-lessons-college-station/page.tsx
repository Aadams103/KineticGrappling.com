import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Private Jiu-Jitsu Lessons College Station, TX",
  description:
    "Private Jiu-Jitsu lessons in College Station, TX at Kinetic Grappling. One-on-one coaching for faster progress, competition prep, and personalized goals.",
  path: "/private-jiu-jitsu-lessons-college-station",
  keywords: ["Private Jiu-Jitsu lessons College Station", "Private BJJ coaching College Station"],
});

const highlights = [
  "Personalized one-on-one instruction",
  "Flexible scheduling",
  "Accelerated skill development",
  "Competition or goal-specific focus",
];

export default function PrivateLessonsPage() {
  return (
    <>
      <PageHero
        title="Private Jiu-Jitsu Lessons in College Station, TX"
        subtitle="One-on-one coaching for faster progress, extra support, competition preparation, or personalized training goals."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Private Lessons" }]}
        imageSrc="/images/private-lessons.jpg"
      />
      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
              <Image
                src="/images/private-lessons.jpg"
                alt="Private Jiu-Jitsu lessons at Kinetic Grappling in College Station, TX"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading title="Get Personalized Coaching" align="left" />
              <p className="text-lg leading-relaxed text-brand-gray">
                Private lessons give you a totally customizable one-on-one session. Work with an
                instructor to improve your strengths, mitigate weaknesses, and move faster toward
                competition or personal goals.
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-brand-gray">
                    <span className="text-brand-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href={`${siteConfig.contactPath}?program=private-lessons`}>
                  {siteConfig.primaryCta}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA ctaLabel={siteConfig.primaryCta} />
    </>
  );
}
