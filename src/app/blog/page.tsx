import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/sanity-queries";
import { contentPillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Stories",
  description: "仕事、トレーニング、学び、暮らし。Mikityの試行錯誤を残す記事一覧。",
  alternates: { canonical: "/blog" },
};

export const revalidate = 3600;

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
        <p className="eyebrow text-[var(--muted)]">Stories</p>
        <h1 className="mt-5 font-serif text-[clamp(4rem,10vw,7rem)] leading-none tracking-[-0.07em]">Journal.</h1>
        <p className="mt-8 max-w-xl text-sm leading-8 text-[var(--muted)]">仕事、トレーニング、学び、暮らし。答えではなく、考えたことと現在地を残します。</p>
      </header>

      <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-y border-[var(--border)] py-4">
        <span className="text-[0.65rem] text-[var(--foreground)]">All</span>
        {contentPillars.map((pillar) => <span key={pillar.title} className="text-[0.65rem] text-[var(--muted)]">{pillar.title}</span>)}
      </div>

      <section className="mt-12">
        {posts.length > 0 ? (
          <div className="border-t border-[var(--border)]">
            {posts.map((post, index) => (
              <article key={post._id} className="border-b border-[var(--border)]">
                <Link href={`/blog/${post.slug.current}`} className="group grid gap-4 py-9 sm:grid-cols-[3rem_8rem_1fr_auto] sm:items-baseline lg:py-11">
                  <span className="font-serif text-sm italic text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[0.65rem] tracking-[0.06em] text-[var(--muted)]">{post.categories?.[0]?.title || "Journal"}</span>
                  <div>
                    <h2 className="text-xl font-medium leading-relaxed tracking-[-0.025em] transition-colors group-hover:text-[var(--accent)] sm:text-2xl">{post.title}</h2>
                    {post.excerpt && <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>}
                  </div>
                  <time dateTime={post.publishedAt} className="text-[0.65rem] text-[var(--muted)]">{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="border-t border-[var(--border)] py-16">
            <p className="text-2xl font-medium tracking-[-0.03em]">最初の記事を準備しています。</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">記事を公開すると、この場所へ追加されます。</p>
            <Link href="/" className="mt-8 inline-block text-xs underline decoration-[var(--border)]">ホームへ戻る</Link>
          </div>
        )}
      </section>
    </div>
  );
}
