import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";

export function LocationSection() {
  return <section className="bg-brand-charcoal py-14 text-white md:py-20" aria-labelledby="visit-heading">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
      <div><p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">College Station · Bryan</p><h2 id="visit-heading" className="font-display mt-3 text-3xl font-extrabold uppercase md:text-4xl">Find your way to the mats.</h2><p className="mt-4 max-w-xl text-lg text-white/80">Visit Kinetic Grappling on SH 30 in College Station. Confirm your first class with the team before you head over.</p></div>
      <div><address className="text-xl not-italic font-semibold">{siteConfig.address.full}</address><a className="mt-2 inline-flex min-h-11 items-center text-lg underline" href={siteConfig.phoneHref}>{siteConfig.phone}</a><div className="mt-5 flex flex-wrap gap-3"><CTAButton href={siteConfig.social.googleMaps} external>Get directions</CTAButton><CTAButton href="/contact" variant="outline" className="!text-white">Contact the academy</CTAButton></div></div>
    </div>
  </section>;
}
