import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "BJJ Competition Training College Station, TX",
  description:
    "BJJ competition training in College Station, TX at Kinetic Grappling. Tournament prep, advanced drilling, and coached sparring for dedicated students.",
  path: "/bjj-competition-training-college-station",
  keywords: ["BJJ competition training College Station", "Brazilian Jiu-Jitsu tournaments Texas"],
});

const highlights = [
  "Tournament preparation and strategy",
  "Advanced Brazilian Jiu-Jitsu, wrestling, and judo details",
  "Coached sparring rounds",
  "Competition mindset development",
];

export default function CompetitionPage() {
  return (
    <>
      <PageHero
        title="BJJ Competition Training in College Station, TX"
        subtitle="Advanced training for students preparing for local and regional tournaments — drilling, sparring, and competition strategy."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Competition Training" }]}
        imageSrc="/images/competition-training.jpg"
      />
      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="Train to Compete" align="left" />
              <p className="text-lg leading-relaxed text-brand-gray">
                Competition training at Kinetic Grappling is for dedicated students who have built
                strong fundamentals and want to test their skills at tournaments. Coaches provide
                structured preparation, advanced techniques, and the mindset to perform under
                pressure.
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
                <CTAButton href={`${siteConfig.contactPath}?program=competition`}>
                  {siteConfig.primaryCta}
                </CTAButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/competition-training.jpg"
                alt="BJJ competition training at Kinetic Grappling in College Station, TX"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>
      <FinalCTA ctaLabel={siteConfig.primaryCta} />
    </>
  );
}
