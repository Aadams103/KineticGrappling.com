import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CoachCard } from "@/components/CoachCard";
import { FinalCTA } from "@/components/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";
import { academyCopy, coaches } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Meet Our BJJ Coaches | Kinetic Grappling College Station",
  description:
    "Meet the experienced, approachable coaches at Kinetic Grappling in College Station, TX. Learn about our instructors and their teaching focus.",
  path: "/coaches",
  keywords: ["BJJ coaches College Station", "Brazilian Jiu-Jitsu instructors College Station"],
});

export default function CoachesPage() {
  return (
    <>
      <PageHero
        title="Meet the Coaches"
        subtitle="Experienced, approachable instructors who make Brazilian Jiu-Jitsu accessible for beginners, kids, and competitors."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Coaches" },
        ]}
        imageSrc="/images/coaches/coach-ambrose-adams.jpg"
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Coaches Who Care About Your Progress"
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
