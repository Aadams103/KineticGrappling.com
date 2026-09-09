import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { createPageMetadata } from "@/lib/metadata";
import { blogPosts, siteConfig, brandAssets } from "@/lib/site-config";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  const metadata = createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", publishedTime: post.date } };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.date, image: `${siteConfig.url}${brandAssets.heroImage}`, mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`, author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url } }} />
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <article className="bg-brand-paper py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm text-brand-gray">By {siteConfig.name}</p>
          <time className="text-sm text-brand-gray" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-brand-gray">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 text-sm text-brand-gray">
            <Link href="/blog" className="font-semibold text-brand-gold-dark hover:underline">
              Back to all articles
            </Link>
          </p>
        </div>
      </article>
      <FinalCTA />
    </>
  );
}
