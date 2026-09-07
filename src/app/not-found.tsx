import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="bg-brand-paper px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold-dark">404</p>
      <h1 className="font-display mt-3 text-4xl font-extrabold uppercase text-brand-charcoal">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-brand-gray">
        That page does not exist. Head back to the academy homepage or book a free class.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <CTAButton href="/">Back Home</CTAButton>
        <CTAButton href="/free-trial" variant="outline">
          Book a Free Class
        </CTAButton>
      </div>
    </section>
  );
}
