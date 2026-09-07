import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CoachCard } from "@/components/CoachCard";
import { FinalCTA } from "@/components/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";
import { academyCopy, coaches } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "BJJ & MMA Coaches in College Station",
  description:
    "Meet the BJJ, MMA, and kids-program coaches currently listed by Kinetic Grappling in College Station, TX.",
  path: "/coaches",
  keywords: ["BJJ coaches College Station", "Brazilian Jiu-Jitsu instructors College Station"],
});

export default function CoachesPage() {
  return (
    <>
      <PageHero
        title="Meet the Coaches"
        subtitle="The instructors currently listed for Kinetic Grappling's Brazilian Jiu-Jitsu, MMA, and kids programs."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Coaches" },
        ]}
        imageSrc="/images/coaches/coach-ambrose-adams.jpg"
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Kinetic Coaching Team"
            subtitle={academyCopy.coachesIntro}
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        headline="Train With Our Coaching Team"
        description="Book a free trial class and meet the coaches who will guide your Jiu-Jitsu journey."
      />
    </>
  );
}
