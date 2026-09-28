import Image from "next/image";
import { PageHero } from "./PageHero";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";
import type { Program } from "@/lib/site-config";

export function DisciplinePage({ program, title, intro, availability }: { program: Program; title: string; intro: string; availability: string }) {
  return <>
    <PageHero title={title} subtitle={intro} imageSrc={program.image} breadcrumb={[{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }, { label: program.title }]} />
    <section className="bg-brand-paper py-14 md:py-20"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div><SectionHeading eyebrow={program.ages} title={`Who ${program.title} is for`} subtitle={program.whoFor} align="left" />
        <p className="leading-relaxed text-brand-gray">{program.description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CTAButton href={program.href}>{program.cta}</CTAButton><CTAButton href="/schedule" variant="outline">View current schedule</CTAButton></div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden"><Image src={program.image} alt={program.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
    </div></section>
    <section className="bg-brand-light py-14 md:py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Training focus" />
      <div className="grid gap-4 sm:grid-cols-2">{program.benefits.map((item) => <div key={item} className="border border-black/10 bg-white p-5 font-bold">{item}</div>)}</div>
      <p className="mt-8 border-l-4 border-brand-red bg-white p-5 text-brand-gray"><strong className="text-brand-charcoal">Current availability:</strong> {availability}</p>
    </div></section>
  </>;
}
