import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { getFAQSchema } from "@/lib/schema";
import { homepageFaqs } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "FAQ | Brazilian Jiu-Jitsu Questions Answered",
  description:
    "Common questions about Brazilian Jiu-Jitsu classes at Kinetic Grappling in College Station, TX — beginners, kids, gis, safety, and booking your first class.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={getFAQSchema(homepageFaqs)} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your first class at Kinetic Grappling."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <FAQAccordion faqs={homepageFaqs} />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
