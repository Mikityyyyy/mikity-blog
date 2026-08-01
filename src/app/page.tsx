import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { getLatestPosts } from "@/lib/sanity-queries";
import { contentPillars, currentGoals, siteDescription, siteUrl, socialLinks } from "@/lib/site-content";
import type { BlogPost } from "@/lib/types";

export const revalidate = 3600;

function getPostImage(post: BlogPost) {
  const asset = post.mainImage?.asset;
  return asset && "url" in asset ? asset.url : null;
}

async function loadLatestPosts() {
  try {
    return await getLatestPosts(3);
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await loadLatestPosts();
  const instagram = socialLinks.find((social) => social.label === "Instagram");

  return (
    <>
      <StructuredData
        type="website"
        data={{ name: "mikitylife", url: siteUrl, description: siteDescription }}
      />

      <section className="editorial-grid border-b border-[var(--border)]">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[90rem] items-stretch lg:grid-cols-[1.55fr_0.65fr]">
          <div className="flex flex-col justify-between border-[var(--border)] px-5 py-12 sm:px-8 sm:py-16 lg:border-r lg:px-12 lg:py-20">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow text-[var(--accent)]">FIELD NOTES / TOKYO</p>
              <p className="eyebrow text-[var(--muted)]">EST. 2026</p>
            </div>

            <div className="my-20 max-w-5xl lg:my-12">
              <p className="mb-5 font-serif text-xl italic text-[var(--muted)] sm:text-2xl">Too many things to want.</p>
              <h1 className="text-[clamp(3.1rem,8vw,7.7rem)] font-black leading-[1.04] tracking-[-0.085em]">
                諦めるには、<br />欲しいものが<br className="sm:hidden" />多すぎる。
              </h1>
              <p className="mt-8 max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">
                走る、挙げる、働く、学ぶ。どれか一つに絞れない会社員が、<br className="hidden sm:block" />うまくいった日も、崩れた日も、その途中を記録します。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/blog" className="inline-flex items-center gap-8 bg-[var(--foreground)] px-6 py-3 text-xs font-semibold tracking-[0.12em] text-[var(--background)] transition-colors hover:bg-[var(--accent)]">
                記事を読む <span aria-hidden="true">→</span>
              </Link>
              {instagram && (
                <a href={instagram.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-8 border border-[var(--foreground)] px-6 py-3 text-xs font-semibold tracking-[0.12em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  今を見る <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>

          <aside className="grid border-t border-[var(--border)] lg:border-t-0">
            <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--border)] bg-[#d8d2c5] lg:aspect-auto">
              <Image src="/profile.png" alt="Mikity" fill priority sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover grayscale-[18%]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 pt-20 text-white">
                <div>
                  <p className="eyebrow text-white/65">WHO</p>
                  <p className="mt-1 text-lg font-semibold">Mikity / 会社員</p>
                </div>
                <span className="text-2xl" aria-hidden="true">↘</span>
              </div>
            </div>
            <div className="grid grid-cols-3">
              {currentGoals.map((goal) => (
                <div key={goal.label} className="border-r border-[var(--border)] p-3 last:border-r-0 sm:p-5 lg:border-b lg:border-r-0 last:lg:border-b-0">
                  <p className="eyebrow text-[var(--muted)]">{goal.label}</p>
                  <p className="mt-3 text-sm font-semibold sm:text-lg">{goal.current}</p>
                  <p className="mt-1 text-[0.62rem] font-semibold tracking-[0.12em] text-[var(--accent)]">→ {goal.target}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 grid gap-4 border-b border-[var(--foreground)] pb-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="eyebrow mb-3 text-[var(--accent)]">WHAT I WRITE</p>
              <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">欲しいものを、分解する。</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">ハウツーではなく、試行錯誤の記録。<br />四つの視点から日々を残します。</p>
          </div>
          <div className="grid border-l border-t border-[var(--border)] md:grid-cols-2 xl:grid-cols-4">
            {contentPillars.map((pillar) => (
              <article key={pillar.title} className="card-lift min-h-72 border-b border-r border-[var(--border)] bg-[rgba(242,239,231,0.68)] p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <p className="font-serif text-3xl italic text-[var(--accent)]">{pillar.number}</p>
                  <p className="eyebrow text-[var(--muted)]">{pillar.jaTitle}</p>
                </div>
                <h3 className="mt-14 font-serif text-3xl font-semibold tracking-[-0.04em]">{pillar.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b1b17] text-[#f2efe7]">
        <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 flex items-end justify-between border-b border-white/25 pb-6">
            <div>
              <p className="eyebrow mb-3 text-[#e4775f]">LATEST STORIES</p>
              <h2 className="font-serif text-5xl tracking-[-0.05em] sm:text-7xl">Journal.</h2>
            </div>
            <Link href="/blog" className="hidden text-xs font-semibold tracking-[0.14em] text-white/65 hover:text-white sm:block">すべての記事 →</Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-px bg-white/20 md:grid-cols-3">
              {posts.map((post, index) => {
                const image = getPostImage(post);
                return (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} className="group bg-[#1b1b17] pb-8">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#292923]">
                      {image ? (
                        <Image src={image} alt={post.mainImage?.alt || post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                      ) : (
                        <div className="editorial-grid flex h-full items-end p-6 text-7xl font-black text-white/10">0{index + 1}</div>
                      )}
                    </div>
                    <div className="pt-6 md:px-6">
                      <div className="flex items-center justify-between gap-3 text-[0.65rem] font-semibold tracking-[0.12em] text-white/45">
                        <span>{post.categories?.[0]?.title || "JOURNAL"}</span>
                        <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold leading-relaxed tracking-[-0.03em] group-hover:text-[#e4775f]">{post.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="editorial-grid border border-white/20 px-6 py-16 sm:px-10">
              <p className="eyebrow text-[#e4775f]">ISSUE 00</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">最初の記事を準備しています。</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">公開した記事だけが、ここに並びます。それまではSNSで現在地を覗いてみてください。</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-28">
          <div>
            <p className="eyebrow mb-4 text-[var(--accent)]">FOLLOW THE PROCESS</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] sm:text-6xl">完成より、<br />進行形を。</h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-[var(--muted)]">ブログでは深く考えたことを。SNSでは、まだ言葉になりきらない毎日を更新しています。</p>
          </div>
          <div className="grid border-l border-t border-[var(--border)] sm:grid-cols-2">
            {socialLinks.filter((social) => social.primary).map((social, index) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="group min-h-40 border-b border-r border-[var(--border)] p-6 sm:p-8">
                <div className="flex justify-between">
                  <span className="eyebrow text-[var(--muted)]">0{index + 1}</span>
                  <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span>
                </div>
                <p className="mt-10 text-2xl font-semibold tracking-[-0.04em] group-hover:text-[var(--accent)]">{social.label}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
