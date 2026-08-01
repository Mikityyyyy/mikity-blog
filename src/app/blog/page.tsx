import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/sanity-queries";
import { contentPillars } from "@/lib/site-content";
import type { BlogPost } from "@/lib/types";

export const metadata: Metadata = {
  title: "Stories",
  description: "仕事、トレーニング、学び、暮らし。Mikityの試行錯誤を残す記事一覧。",
  alternates: { canonical: "/blog" },
};

export const revalidate = 3600;

function getPostImage(post: BlogPost) {
  const asset = post.mainImage?.asset;
  return asset && "url" in asset ? asset.url : null;
}

async function loadPosts() {
  try {
    return await getPosts();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await loadPosts();

  return (
    <div>
      <header className="editorial-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="eyebrow text-[var(--accent)]">ALL STORIES / ARCHIVE</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <h1 className="font-serif text-[clamp(4.5rem,12vw,10rem)] leading-none tracking-[-0.08em]">Journal.</h1>
            <div className="border-t border-[var(--foreground)] pt-4">
              <p className="text-sm leading-8 text-[var(--muted)]">仕事、トレーニング、学び、暮らし。<br />答えではなく、現在地を残す場所です。</p>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-[90rem] gap-6 overflow-x-auto px-5 py-5 sm:px-8 lg:px-12">
          <span className="eyebrow whitespace-nowrap text-[var(--accent)]">ALL</span>
          {contentPillars.map((pillar) => (
            <span key={pillar.title} className="eyebrow whitespace-nowrap text-[var(--muted)]">{pillar.title}</span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {posts.length > 0 ? (
          <div className="grid border-l border-t border-[var(--border)] md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => {
              const image = getPostImage(post);
              return (
                <article key={post._id} className="card-lift border-b border-r border-[var(--border)] bg-[rgba(242,239,231,0.72)]">
                  <Link href={`/blog/${post.slug.current}`} className="group flex h-full flex-col">
                    <div className="relative aspect-[16/11] overflow-hidden border-b border-[var(--border)] bg-[#ded9cd]">
                      {image ? (
                        <Image src={image} alt={post.mainImage?.alt || post.title} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                      ) : (
                        <div className="editorial-grid flex h-full items-end justify-between p-6">
                          <span className="font-serif text-8xl italic text-[var(--foreground)]/10">{String(index + 1).padStart(2, "0")}</span>
                          <span className="eyebrow text-[var(--muted)]">NO IMAGE</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <div className="flex items-center justify-between gap-4 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--muted)]">
                        <span>{post.categories?.[0]?.title || "JOURNAL"}</span>
                        <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                      </div>
                      <h2 className="mt-6 text-2xl font-semibold leading-relaxed tracking-[-0.035em] transition-colors group-hover:text-[var(--accent)]">{post.title}</h2>
                      {post.excerpt && <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>}
                      <p className="mt-auto pt-8 text-xs font-semibold tracking-[0.12em]">READ STORY →</p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="editorial-grid border border-[var(--border)] px-6 py-20 sm:px-12 lg:py-28">
            <p className="eyebrow text-[var(--accent)]">ISSUE 00 / COMING SOON</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.06em] sm:text-6xl">最初の記事を、<br />準備しています。</h2>
            <p className="mt-7 max-w-xl text-sm leading-8 text-[var(--muted)]">まだ公開済みの記事はありません。記事を公開すると、このページへ自動で追加されます。</p>
            <Link href="/" className="mt-10 inline-flex border-b border-[var(--foreground)] pb-1 text-xs font-semibold tracking-[0.12em]">HOMEへ戻る →</Link>
          </div>
        )}
      </section>
    </div>
  );
}
