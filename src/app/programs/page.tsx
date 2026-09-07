import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { FinalCTA } from "@/components/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";
import { programs } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "BJJ Programs in College Station, TX",
  description:
    "Explore kids Jiu-Jitsu, adult BJJ fundamentals, No-Gi grappling, competition training, and private lessons at Kinetic Grappling in College Station, TX.",
  path: "/programs",
  keywords: [
    "BJJ programs College Station",
    "Martial arts programs College Station",
    "Brazilian Jiu-Jitsu classes",
  ],
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Brazilian Jiu-Jitsu Programs in College Station"
        subtitle="From preschool movement classes to adult beginner fundamentals and competition training — find the right program for you or your family at Kinetic Grappling."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
        imageSrc="/images/kids-bjj-class.jpg"
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Programs for Every Age and Goal"
            subtitle="Each program is designed with clear structure, experienced coaching, and a supportive team culture. Start with a free class."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold uppercase text-brand-charcoal md:text-3xl">
            Not Sure Which Program Is Right?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-gray">
            Book a free class and our coaches will help you choose the best starting point based on
            age, experience, and goals. Whether you are looking for kids martial arts in College
            Station or adult beginner BJJ, we will guide you.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
