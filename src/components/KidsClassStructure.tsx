import { kidsLearningFocus } from "@/lib/kids-content";
import { SectionHeading } from "./SectionHeading";

export function KidsClassStructure() {
  return <section id="class-structure" className="bg-brand-paper py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Inside the kids program" title="A class with something to work on." subtitle="For ages 6–12, structured technique instruction takes the lead. Listening, respect, and fitness are part of the same learning environment." align="left" />
      <div className="grid gap-5 md:grid-cols-3">{kidsLearningFocus.map((item, index) => <article key={item.title} className="border-t-4 border-brand-red bg-white p-6 md:p-8">
        <span aria-hidden="true" className="font-display text-5xl font-extrabold text-brand-gold-dark">0{index + 1}</span>
        <h3 className="font-display mt-6 text-2xl font-extrabold uppercase">{item.title}</h3><p className="mt-3 leading-relaxed text-brand-gray">{item.description}</p>
      </article>)}</div>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-brand-gray">These are the program’s learning priorities. Ask the coach how activities and partner practice are adapted for your child’s experience.</p>
    </div>
  </section>;
}
