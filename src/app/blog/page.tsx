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
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <header className="max-w-3xl">
        <p className="eyebrow text-[var(--accent)]">Stories / Archive</p>
        <h1 className="mt-5 font-serif text-[clamp(2.8rem,7vw,4rem)] leading-none tracking-[-0.06em]">Stories &amp; Notes.</h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)]">仕事、トレーニング、学び、暮らし。答えが出る前の考えと現在地を残します。</p>
      </header>

      <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-y border-[var(--border)] py-4">
        <span className="text-[0.65rem] text-[var(--foreground)]">ALL</span>
        {contentPillars.map((pillar) => <span key={pillar.title} className="text-[0.65rem] text-[var(--muted)]">{pillar.title}</span>)}
      </div>

      <section className="mt-12">
        {posts.length > 0 ? (
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
            {posts.map((post, index) => {
              const image = getPostImage(post);

              return (
                <article key={post._id}>
                  <Link href={`/blog/${post.slug.current}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe8e1]">
                      {image ? (
                        <Image
                          src={image}
                          alt={post.mainImage?.alt || post.title}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.015] group-hover:opacity-95"
                        />
                      ) : (
                        <div className="flex h-full items-end justify-between p-6 text-[var(--muted)]">
                          <span className="font-serif text-5xl italic opacity-25">{String(index + 1).padStart(2, "0")}</span>
                          <span className="text-[0.62rem] tracking-[0.08em]">mikitylife</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-5 text-[0.65rem] text-[var(--muted)]">
                      <span>{post.categories?.[0]?.title || "Journal"}</span>
                      <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                    </div>
                    <h2 className="mt-3 text-xl font-medium leading-relaxed tracking-[-0.025em] transition-colors group-hover:text-[var(--accent)] sm:text-2xl">{post.title}</h2>
                    {post.excerpt && <p className="mt-3 line-clamp-2 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>}
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border-t border-[var(--border)] py-16">
            <p className="text-xl font-medium tracking-[-0.03em]">最初の記事を準備しています。</p>
            <Link href="/" className="mt-8 inline-block text-xs underline decoration-[var(--border)]">Back home</Link>
          </div>
        )}
      </section>
    </div>
  );
}
