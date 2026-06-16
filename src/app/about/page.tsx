import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "About Kinetic Grappling | BJJ Academy in College Station, TX",
  description:
    "Learn about Kinetic Grappling — a family-friendly Brazilian Jiu-Jitsu academy in College Station, TX serving Bryan and the Brazos Valley.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Kinetic Grappling"
        subtitle="A clean, family-focused Brazilian Jiu-Jitsu academy built for kids, teens, adults, beginners, and competitors in College Station, Texas."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading title="Our Mission" align="left" />
          <div className="space-y-4 text-lg leading-relaxed text-brand-gray">
            <p>
              Kinetic Grappling exists to bring high-quality Brazilian Jiu-Jitsu to College Station
              and the Brazos Valley. We believe martial arts should be approachable, structured, and
              transformative — whether you&apos;re a parent looking for kids martial arts, an adult
              starting from zero, or a competitor chasing the next level.
            </p>
            <p>
              Head Coach Ambrose Adams founded the academy with a clear vision: create a clean,
              professional training environment where every student feels welcome, supported, and
              challenged to grow.
            </p>
            <p>
              We serve families and students from College Station, Bryan, Texas A&amp;M, and
              surrounding communities. Our programs cover Little Grapplers (ages 3–5), Kids BJJ,
              Teen / Adult Fundamentals, No-Gi Grappling, Competition Training, and Private Lessons.
            </p>
          </div>
          <div className="mt-10">
            <CTAButton href={siteConfig.contactPath}>{siteConfig.primaryCta}</CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
