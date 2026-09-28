import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/site-config";
import { scheduleForProgram } from "@/lib/schedule";
import { CTAButton } from "./CTAButton";

export function KidsSpotlight() {
  const kids = programs.find(program => program.slug === "kids-bjj")!;
  return <section className="border-b border-black/10 bg-white py-12 md:py-20" aria-labelledby="kids-spotlight-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">For the next generation</p>
        <Link href="/adult-bjj-college-station" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Looking for adult training? →</Link>
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <figure className="overflow-hidden border border-black/10 bg-brand-paper">
          <Image src={kids.image} alt={kids.imageAlt} width={1920} height={1280} sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full" />
          <figcaption className="border-t border-black/10 px-5 py-4 text-sm text-brand-gray">Kids Jiu-Jitsu at Kinetic · College Station, Texas</figcaption>
        </figure>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-gold-dark">{kids.ages} · Kids Fundamentals</p>
          <h2 id="kids-spotlight-heading" className="font-display mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">Big effort.<br />Small victories.<br /><span className="text-brand-red">A place to grow.</span></h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-gray">A new skill to work on. A reason to listen closely. An active class with a clear focus. Kinetic’s kids program brings technique, respect, and fitness onto the same mat.</p>
          <ul className="mt-5 space-y-2 border-l-4 border-brand-gold pl-4">{scheduleForProgram("kids-bjj").map(entry => <li key={entry.day} className="font-semibold">{entry.day} · {entry.time} <span className="text-sm font-normal text-brand-gray">Central</span></li>)}</ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><CTAButton href={kids.learnMoreHref}>Explore kids classes</CTAButton><CTAButton href="/free-trial?program=kids-bjj#ask-a-coach" variant="outline">Plan a first visit</CTAButton></div>
          <p className="mt-4 text-sm text-brand-gray">Ages 3–5? <Link href="/kids-jiu-jitsu-college-station#little-grapplers-details" className="inline-flex min-h-11 items-center font-semibold text-brand-charcoal underline underline-offset-4">Meet Little Grapplers.</Link></p>
        </div>
      </div>
    </div>
  </section>;
}
