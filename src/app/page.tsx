import Image from "next/image";
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

      <section className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_17rem] lg:py-28">
        <div className="max-w-4xl">
          <p className="eyebrow text-[var(--muted)]">A personal journal by Mikity</p>
          <h1 className="mt-8 text-[clamp(3.2rem,8vw,6.8rem)] font-medium leading-[1.12] tracking-[-0.075em]">
            諦めるには、<br />欲しいものが多すぎる。
          </h1>
          <p className="mt-9 max-w-xl text-sm leading-8 text-[var(--muted)] sm:text-base">
            走る、挙げる、働く、学ぶ。<br />どれか一つに絞れない会社員の、静かな記録です。
          </p>
          <div className="mt-10 flex items-center gap-7 text-xs">
            <Link href="/blog" className="border-b border-[var(--foreground)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">記事を読む</Link>
            {instagram && <a href={instagram.href} target="_blank" rel="noreferrer" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Instagram ↗</a>}
          </div>
        </div>

        <div className="justify-self-start lg:justify-self-end">
          <div className="relative h-56 w-44 overflow-hidden bg-[#e9e6df] sm:h-72 sm:w-56">
            <Image src="/profile.png" alt="Mikity" fill priority sizes="224px" className="object-cover grayscale-[28%]" />
          </div>
          <p className="mt-3 text-[0.65rem] tracking-[0.08em] text-[var(--muted)]">MIKITY — TOKYO</p>
        </div>
      </section>

      <div className="border-y border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
          {contentPillars.map((pillar) => <span key={pillar.title} className="text-[0.68rem] tracking-[0.1em] text-[var(--muted)]">{pillar.title}</span>)}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr]">
          <div>
            <p className="eyebrow text-[var(--muted)]">Latest stories</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em]">最近の記録。</h2>
            <Link href="/blog" className="mt-6 inline-block text-xs text-[var(--muted)] underline decoration-[var(--border)] transition-colors hover:text-[var(--foreground)]">すべての記事</Link>
          </div>

          {posts.length > 0 ? (
            <div className="border-t border-[var(--border)]">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="group grid gap-3 border-b border-[var(--border)] py-7 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline">
                  <span className="text-[0.65rem] tracking-[0.08em] text-[var(--muted)]">{post.categories?.[0]?.title || "Journal"}</span>
                  <h3 className="text-lg font-medium leading-relaxed tracking-[-0.02em] transition-colors group-hover:text-[var(--accent)] sm:text-xl">{post.title}</h3>
                  <time dateTime={post.publishedAt} className="text-[0.65rem] text-[var(--muted)]">{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border-t border-[var(--border)] py-10">
              <p className="text-lg">最初の記事を準備しています。</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">公開した記事だけが、ここに静かに並びます。</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[#f0eee8]">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
          <div>
            <p className="eyebrow text-[var(--muted)]">About this journal</p>
            <h2 className="mt-5 max-w-md text-3xl font-medium leading-[1.5] tracking-[-0.045em] sm:text-4xl">完成した自分ではなく、途中にいる自分を書く。</h2>
            <p className="mt-7 max-w-md text-sm leading-8 text-[var(--muted)]">誰かに正解を教える場所ではありません。考え、試し、うまくいかなかった日まで残しておくためのブログです。</p>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {contentPillars.map((pillar) => (
              <div key={pillar.title}>
                <p className="text-xs text-[var(--accent)]">{pillar.number}</p>
                <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-[var(--muted)]">Follow the process</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">日々の現在地は、SNSで。</h2>
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
