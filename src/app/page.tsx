import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { getLatestPosts } from "@/lib/sanity-queries";
import { contentPillars, siteDescription, siteUrl, socialLinks } from "@/lib/site-content";

export const revalidate = 3600;

async function loadLatestPosts() {
  try {
    return await getLatestPosts(4);
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await loadLatestPosts();
  const instagram = socialLinks.find((social) => social.label === "Instagram");

  return (
    <>
      <StructuredData type="website" data={{ name: "mikitylife", url: siteUrl, description: siteDescription }} />

      <section className="bg-[#1d1d19] text-[#f3f1eb]">
        <div className="mx-auto grid min-h-[calc(82svh-5rem)] max-w-6xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:py-24">
          <div>
            <p className="eyebrow text-white/45">Mikity Life — Field Notes</p>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.7rem,6vw,4.2rem)] font-medium leading-[1.25] tracking-[-0.065em]">
              諦めるには、<br />欲しいものが多すぎる。
            </h1>
            <p className="mt-7 font-serif text-lg italic tracking-[-0.02em] text-[#d87852]">Work. Train. Learn. Live.</p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">働く、鍛える、学ぶ。どれも諦めないための試行錯誤。</p>
            <div className="mt-9 flex items-center gap-7 text-xs">
              <Link href="/blog" className="border-b border-white/60 pb-1 transition-colors hover:border-[#d87852] hover:text-[#d87852]">Read the stories</Link>
              {instagram && <a href={instagram.href} target="_blank" rel="noreferrer" className="text-white/45 transition-colors hover:text-white">Follow the process ↗</a>}
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow text-white/35">What this is about</p>
            <div className="mt-6 space-y-4">
              {contentPillars.map((pillar) => (
                <div key={pillar.title} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-white/40">{pillar.number}</span>
                  <span className="font-serif text-xl tracking-[-0.03em]">{pillar.title}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[0.62rem] tracking-[0.14em] text-white/30">TOKYO / SINCE 2026</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[13rem_1fr]">
          <div>
            <p className="eyebrow text-[var(--accent)]">Latest stories</p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em]">最近の記録。</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">考えたこと、試したこと、<br />うまくいかなかった日のこと。</p>
          </div>

          {posts.length > 0 ? (
            <div className="border-t border-[var(--border)]">
              {posts.map((post, index) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="group grid gap-3 border-b border-[var(--border)] py-6 sm:grid-cols-[2rem_6rem_1fr_auto] sm:items-baseline">
                  <span className="font-serif text-xs italic text-[var(--accent)]">0{index + 1}</span>
                  <span className="text-[0.62rem] tracking-[0.08em] text-[var(--muted)]">{post.categories?.[0]?.title || "LIFE"}</span>
                  <h2 className="text-lg font-medium leading-relaxed tracking-[-0.025em] transition-colors group-hover:text-[var(--accent)]">{post.title}</h2>
                  <time dateTime={post.publishedAt} className="text-[0.62rem] text-[var(--muted)]">{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border-t border-[var(--border)] py-8">
              <p className="text-lg font-medium tracking-[-0.03em]">最初の記事を準備しています。</p>
            </div>
          )}
        </div>
        <div className="mt-10 text-right">
          <Link href="/blog" className="text-xs text-[var(--muted)] underline decoration-[var(--border)] transition-colors hover:text-[var(--foreground)]">View all stories</Link>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[#e9e6df]">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
          <div>
            <p className="eyebrow text-[var(--accent)]">The four pillars</p>
            <h2 className="mt-5 max-w-xs text-3xl font-medium leading-[1.4] tracking-[-0.05em]">いま、向き合っていること。</h2>
          </div>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {contentPillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-[var(--border)] pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold tracking-[0.12em]">{pillar.title}</h3>
                  <span className="font-serif text-xs italic text-[var(--accent)]">{pillar.number}</span>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-[var(--accent)]">Follow along</p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em]">日々の現在地は、SNSで。</h2>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {socialLinks.filter((social) => social.primary).map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">{social.label} ↗</a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
