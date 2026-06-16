import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Contact & Book a Free Class",
  description:
    "Book your free Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX. Contact us by form, phone, or email.",
  path: "/contact",
});

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <>
      <PageHero
        title="Book a Free Class"
        subtitle="Ready to try Brazilian Jiu-Jitsu? Fill out the form, call us, or email us and we'll help you choose the right first class. Wear comfortable workout clothes, bring water, and arrive a few minutes early. No experience is required — we'll lend you a gi when you're ready."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading title="Request Your Free Class" align="left" />
              <ContactForm />
            </div>
            <aside className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold">Contact Directly</h2>
                <address className="mt-4 space-y-3 not-italic text-sm">
                  <p>
                    <span className="font-medium text-brand-gray">Phone</span><br />
                    <a href={siteConfig.phoneHref} className="font-semibold hover:text-brand-gold">{siteConfig.phone}</a>
                  </p>
                  <p>
                    <span className="font-medium text-brand-gray">Email</span><br />
                    <a href={siteConfig.emailHref} className="font-semibold hover:text-brand-gold break-all">{siteConfig.email}</a>
                  </p>
                  <p>
                    <span className="font-medium text-brand-gray">Address</span><br />
                    {siteConfig.address.full}
                  </p>
                </address>
              </div>
              <div className="rounded-2xl bg-brand-light p-6">
                <h2 className="text-lg font-bold">What to Wear</h2>
                <p className="mt-2 text-sm text-brand-gray leading-relaxed">
                  Comfortable workout clothes and a water bottle. No gi needed for your first class — we&apos;ll lend you one when you&apos;re ready.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <iframe
                  title="Kinetic Grappling on Google Maps"
                  src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
                  className="h-48 w-full border-0"
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
