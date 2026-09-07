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
      <section className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest Articles" align="left" />
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border border-black/5 bg-white p-6">
                <time className="text-sm text-brand-gray" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <h2 className="font-display mt-2 text-xl font-extrabold uppercase text-brand-charcoal">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-gold-dark">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 leading-relaxed text-brand-gray">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
