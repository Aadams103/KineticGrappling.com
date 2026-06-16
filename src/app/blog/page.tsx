import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCTA } from "@/components/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "BJJ Resources & Blog | Kinetic Grappling",
  description:
    "Brazilian Jiu-Jitsu tips, beginner guides, and resources from Kinetic Grappling in College Station, TX.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="BJJ Resources & Blog"
        subtitle="Helpful guides for beginners, parents, and students training Brazilian Jiu-Jitsu in College Station."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading title="Latest Articles" align="left" />
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <time className="text-sm text-brand-gray">{post.date}</time>
                <h2 className="mt-2 text-xl font-bold text-brand-charcoal">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-gold">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-brand-gray leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-gray">
            More articles coming soon. Have a question? <Link href="/contact" className="font-semibold text-brand-gold hover:underline">Book a free class</Link> and talk to a coach.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
