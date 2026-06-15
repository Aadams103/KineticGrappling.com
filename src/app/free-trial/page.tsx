import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Book a Free Trial Class | Kinetic Grappling College Station",
  description:
    "Book your free trial Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX. No experience required. Kids and adult classes available.",
  path: "/free-trial",
  keywords: [
    "Free trial BJJ College Station",
    "Free martial arts trial College Station",
    "Book BJJ class College Station",
  ],
});

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        title="Book Your Free Trial Class"
        subtitle="Ready to try Brazilian Jiu-Jitsu? Fill out the form, call us, or email us and we'll help you choose the right first class. Wear comfortable workout clothes, bring water, and arrive a few minutes early. No experience is required."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Book Free Trial" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading
                title="Request Your Free Trial"
                subtitle="Tell us a little about yourself and we'll reach out to schedule your first class."
                align="left"
              />
              <ContactForm />
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-brand-charcoal">Contact Us Directly</h2>
                  <address className="mt-4 space-y-3 not-italic">
                    <p>
                      <span className="block text-sm font-medium text-brand-gray">Phone</span>
                      <a href={siteConfig.phoneHref} className="text-brand-charcoal font-semibold hover:text-brand-red">
                        {siteConfig.phone}
                      </a>
                    </p>
                    <p>
                      <span className="block text-sm font-medium text-brand-gray">Email</span>
                      <a href={siteConfig.emailHref} className="text-brand-charcoal font-semibold hover:text-brand-red break-all">
                        {siteConfig.email}
                      </a>
                    </p>
                    <p>
                      <span className="block text-sm font-medium text-brand-gray">Address</span>
                      <span className="text-brand-charcoal">{siteConfig.address.full}</span>
                    </p>
                  </address>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-brand-light p-6">
                  <h2 className="text-lg font-bold text-brand-charcoal">What to Wear</h2>
                  <p className="mt-2 text-brand-gray leading-relaxed">
                    Comfortable workout clothes — t-shirt and athletic shorts or leggings. Bring water. A gi is not required for your first class.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-brand-light p-6">
                  <h2 className="text-lg font-bold text-brand-charcoal">What to Expect</h2>
                  <p className="mt-2 text-brand-gray leading-relaxed">
                    Arrive a few minutes early. A coach will greet you, show you around, and guide you through your first class. No experience needed.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-100">
                  <iframe
                    title="Kinetic Grappling location on Google Maps"
                    src="https://maps.google.com/maps?q=1055+Texas+Ave+S+Suite+101+College+Station+TX+77840&output=embed"
                    className="h-48 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
