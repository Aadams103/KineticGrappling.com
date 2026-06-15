import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CoachCard } from "@/components/CoachCard";
import { FinalCTA } from "@/components/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";
import { coaches } from "@/lib/site-config";

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
        subtitle="Experienced, approachable instructors who make Brazilian Jiu-Jitsu accessible for beginners, kids, and competitors. Our coaching team is here to guide you every step of the way."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Coaches" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Coaches Who Care About Your Progress"
            subtitle="At Kinetic Grappling, our coaches combine technical expertise with a welcoming approach. Whether you are a nervous first-timer or a seasoned competitor, you will find support on our mats."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal md:text-3xl">
            Train With Coaches You Can Trust
          </h2>
          <p className="mt-4 text-lg text-brand-gray leading-relaxed">
            Our coaching team brings years of experience in Brazilian Jiu-Jitsu instruction, competition, and youth development. Every class is led by coaches who prioritize safety, clear instruction, and a positive academy culture.
          </p>
        </div>
      </section>

      <FinalCTA
        headline="Train With Our Coaching Team"
        description="Book a free trial class and meet the coaches who will guide your Jiu-Jitsu journey."
      />
    </>
  );
}
