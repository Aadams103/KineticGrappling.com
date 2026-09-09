import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Contact & Location in College Station",
  description:
    "Book your free Brazilian Jiu-Jitsu class at Kinetic Grappling in College Station, TX. Contact us by form, phone, or email.",
  path: "/contact",
});

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <>
      <PageHero
        title="Contact Kinetic Grappling"
        subtitle="Call, email, get directions, or send a first-class request. Kinetic Grappling serves College Station, Bryan, and the Brazos Valley."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading title="Request Your Free Class" align="left" />
              <Suspense fallback={<p className="text-brand-gray">Loading form…</p>}>
                <ContactForm deliveryEnabled={Boolean(process.env.RESEND_API_KEY && process.env.TRIAL_FORM_FROM_EMAIL)} />
              </Suspense>
            </div>
            <aside className="space-y-6 lg:col-span-2">
              <div className="border border-black/5 bg-white p-6">
                <h2 className="font-display text-lg font-extrabold uppercase">Contact Directly</h2>
                <address className="mt-4 space-y-3 not-italic text-sm">
                  <p>
                    <span className="font-medium text-brand-gray">Phone</span>
                    <br />
                    <a href={siteConfig.phoneHref} className="font-semibold hover:text-brand-gold-dark">
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-brand-gray">Email</span>
                    <br />
                    <a
                      href={siteConfig.emailHref}
                      className="break-all font-semibold hover:text-brand-gold-dark"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-brand-gray">Address</span>
                    <br />
                    {siteConfig.address.full}
                  </p>
                  <p>
                    <span className="font-medium text-brand-gray">Office hours</span>
                    <br />
                    {siteConfig.officeHours}
                  </p>
                </address>
              </div>
              <div className="bg-brand-light p-6">
                <h2 className="font-display text-lg font-extrabold uppercase">What to Wear</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  Comfortable workout clothes and a water bottle. No gi needed for your first class
                  — we&apos;ll lend you one when you&apos;re ready.
                </p>
              </div>
              <div className="overflow-hidden border border-black/5">
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
