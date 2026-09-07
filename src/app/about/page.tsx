import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";
import { CTAButton } from "@/components/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { academyCopy, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "About Kinetic Grappling | BJJ Academy in College Station, TX",
  description:
    "Learn about Kinetic Grappling — a family-friendly Brazilian Jiu-Jitsu, wrestling, and MMA academy in College Station, TX serving Bryan and the Brazos Valley.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Kinetic Grappling"
        subtitle="A clean, family-focused Brazilian Jiu-Jitsu academy built for kids, teens, adults, beginners, and competitors in College Station, Texas."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        imageSrc="/images/first-class.jpg"
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="World-class martial arts for College Station & Bryan"
              align="left"
            />
            <div className="space-y-4 text-lg leading-relaxed text-brand-gray">
              <p>{academyCopy.aboutIntro}</p>
              <p>
                Head Coach Ambrose Adams leads the academy with a simple standard: do not settle for
                plain “good.” We push to get better every day — as coaches, as a team, and as a
                community.
              </p>
            </div>
            <div className="mt-8">
              <CTAButton href={siteConfig.contactPath}>{siteConfig.primaryCta}</CTAButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/coaches/coach-ambrose-adams.jpg"
              alt="Head Coach Ambrose Adams at Kinetic Grappling in College Station, TX"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="border border-white/10 p-8">
            <h2 className="font-display text-2xl font-extrabold uppercase text-white">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-white/75">{academyCopy.mission}</p>
          </article>
          <article className="border border-white/10 p-8">
            <h2 className="font-display text-2xl font-extrabold uppercase text-white">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-white/75">{academyCopy.vision}</p>
          </article>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading title="The gym for all" subtitle={academyCopy.gymForAll} />
          <CTAButton href="/coaches" variant="outline">
            Meet the Coaches
          </CTAButton>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
