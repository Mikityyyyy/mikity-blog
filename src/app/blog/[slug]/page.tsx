import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortableText, { type PortableTextValue } from "@/components/PortableText";
import StructuredData from "@/components/StructuredData";
import { getPostBySlug } from "@/lib/sanity-queries";
import { siteUrl } from "@/lib/site-content";

interface Props {
  params: Promise<{ slug: string }>;
}

function postImageUrl(post: Awaited<ReturnType<typeof getPostBySlug>>) {
  const asset = post?.mainImage?.asset;
  return asset && "url" in asset ? asset.url : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "記事が見つかりません" };

  const image = postImageUrl(post);
  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug.current}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${siteUrl}/blog/${post.slug.current}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: image ? [{ url: image, alt: post.mainImage?.alt || post.title }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const image = postImageUrl(post);

  return (
    <article>
      <StructuredData
        type="article"
        data={{
          title: post.title,
          description: post.excerpt,
          image,
          author: post.author?.name || "Mikity",
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          url: `${siteUrl}/blog/${post.slug.current}`,
        }}
      />

      <header className="editorial-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <div className="flex items-center justify-center gap-4 text-[0.66rem] font-semibold tracking-[0.14em] text-[var(--muted)]">
            <span className="text-[var(--accent)]">{post.categories?.[0]?.title || "JOURNAL"}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("ja-JP", { dateStyle: "long" }).format(new Date(post.publishedAt))}</time>
          </div>
          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-[1.35] tracking-[-0.06em] sm:text-6xl lg:text-7xl">{post.title}</h1>
          {post.excerpt && <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">{post.excerpt}</p>}
          <div className="mt-8 flex items-center justify-center gap-5 text-[0.66rem] font-semibold tracking-[0.12em] text-[var(--muted)]">
            <span>BY {post.author?.name || "MIKITY"}</span>
            {post.readTime ? <span>{post.readTime} MIN READ</span> : null}
          </div>
        </div>
      </header>

      {image && (
        <div className="relative mx-auto aspect-[16/8] max-w-[90rem] overflow-hidden border-x border-b border-[var(--border)] bg-[#ded9cd]">
          <Image src={image} alt={post.mainImage?.alt || post.title} fill priority sizes="100vw" className="object-cover" />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        {post.body?.length ? (
          <PortableText value={post.body as PortableTextValue} />
        ) : (
          <p className="text-center text-sm text-[var(--muted)]">本文を準備しています。</p>
        )}
        <div className="mt-20 flex items-center justify-between border-t border-[var(--foreground)] pt-6 text-xs font-semibold tracking-[0.12em]">
          <Link href="/blog" className="transition-colors hover:text-[var(--accent)]">← STORIES</Link>
          <a href={`https://x.com/intent/post?url=${encodeURIComponent(`${siteUrl}/blog/${post.slug.current}`)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--accent)]">SHARE ON X ↗</a>
        </div>
      </div>
    </article>
  );
}
