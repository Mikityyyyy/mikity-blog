import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { getLatestPosts } from "@/lib/sanity-queries";
import { contentPillars, siteDescription, siteUrl, socialLinks } from "@/lib/site-content";
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
      <StructuredData type="website" data={{ name: "mikitylife", url: siteUrl, description: siteDescription }} />

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-6xl border-x border-[var(--border)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="order-2 flex min-h-[31rem] flex-col justify-between px-5 py-14 sm:px-10 sm:py-16 lg:order-1 lg:min-h-[36rem] lg:px-12 lg:py-20">
            <div>
              <p className="eyebrow text-[var(--accent-dark)]">29歳会社員 × Hybrid Athlete</p>
              <h1 className="mt-7 max-w-3xl text-[clamp(2.55rem,5.5vw,4rem)] font-black leading-[1.18] tracking-[-0.055em]">
                諦めるには、<br />欲しいものが多すぎる。
              </h1>
            </div>

            <div className="mt-14 max-w-xl">
              <p className="text-base font-extrabold tracking-[-0.025em] text-[var(--accent)] sm:text-lg">Work. Train. Learn. Live.</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">働きながら、走り、鍛え、学び続ける。<br className="hidden sm:block" />会社員・Mikityの試行錯誤を残すフィールドノート。</p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-semibold">
                <Link href="/blog" className="bg-[var(--accent)] px-5 py-3 text-white transition-colors hover:bg-[var(--accent-dark)]">Read the stories</Link>
                {instagram && <a href={instagram.href} target="_blank" rel="noreferrer" className="border-b border-[var(--foreground)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">Follow the process ↗</a>}
              </div>
            </div>
          </div>

          <figure className="relative order-1 flex min-h-[24rem] items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] p-9 lg:order-2 lg:min-h-full lg:border-b-0 lg:border-l">
            <div className="relative aspect-square w-full max-w-[24rem]">
              <Image src="/profile.png" alt="Mikityのプロフィール写真" fill priority sizes="(min-width: 1024px) 420px, 80vw" className="object-contain grayscale" />
            </div>
            <figcaption className="absolute bottom-5 left-5 text-[0.62rem] font-semibold tracking-[0.14em] text-[var(--muted)] sm:bottom-7 sm:left-8">MIKITY / TOKYO</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-6xl border-x border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {contentPillars.map((pillar) => (
            <div key={pillar.title} className="border-b border-[var(--border)] px-5 py-8 last:border-b-0 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="flex items-baseline justify-between">
                <h2 className="text-sm font-extrabold tracking-[0.08em]">{pillar.title}</h2>
                <span className="text-xs font-bold text-[var(--accent)]">{pillar.number}</span>
              </div>
              <p className="mt-4 text-xs leading-6 text-[var(--muted)]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-x border-[var(--border)] px-5 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-[var(--accent-dark)]">Latest stories</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.045em]">最近の記録。</h2>
          </div>
          <Link href="/blog" className="text-xs font-semibold tracking-[0.06em] text-[var(--accent-dark)] transition-colors hover:text-[var(--foreground)]">View all stories →</Link>
        </div>

        {posts.length > 0 ? (
          <div className="mt-10 grid gap-x-7 gap-y-14 md:grid-cols-3">
            {posts.map((post, index) => {
              const image = getPostImage(post);

              return (
                <article key={post._id}>
                  <Link href={`/blog/${post.slug.current}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                      {image ? (
                        <Image src={image} alt={post.mainImage?.alt || post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover grayscale-[15%] transition duration-500 group-hover:scale-[1.015] group-hover:grayscale-0" />
                      ) : (
                        <div className="flex h-full items-end justify-between p-5">
                          <span className="text-5xl font-black text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                          <span className="text-[0.6rem] tracking-[0.12em] text-[var(--muted)]">FIELD NOTE</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4 text-[0.62rem] text-[var(--muted)]">
                      <span className="font-semibold tracking-[0.08em]">{post.categories?.[0]?.title || "LIFE"}</span>
                      <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-relaxed tracking-[-0.025em] transition-colors group-hover:text-[var(--accent)]">{post.title}</h3>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 grid min-h-48 place-items-center border border-[var(--border)] bg-[var(--surface)] px-6 text-center">
            <div>
              <span className="mx-auto block h-2 w-2 bg-[var(--accent)]" />
              <p className="mt-5 text-base font-bold">最初の記事を準備しています。</p>
              <p className="mt-2 text-xs tracking-[0.08em] text-[var(--muted)]">NO. 001 — COMING SOON</p>
            </div>
          </div>
        )}
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-10 border-x border-[var(--border)] px-5 py-16 sm:px-10 lg:grid-cols-[15rem_1fr] lg:px-12 lg:py-20">
          <p className="eyebrow text-[var(--accent-dark)]">About / Mikity</p>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black leading-[1.35] tracking-[-0.045em] sm:text-4xl">29歳会社員 ×<br className="sm:hidden" /> Hybrid Athlete.</h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)]">IT企業でBizDevとマーケティングに向き合いながら、HYROX、マラソン、筋力トレーニング、英語、AIを続けています。完成した姿ではなく、全部を諦めないための途中経過を記録します。</p>
            <Link href="/about" className="mt-7 inline-block border-b border-[var(--foreground)] pb-1 text-xs font-semibold">More about Mikity</Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--accent)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 border-x border-white/25 px-5 py-12 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-14">
          <div>
            <p className="eyebrow text-white/75">Follow along</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.045em]">日々の現在地は、SNSで。</h2>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {socialLinks.filter((social) => social.primary).map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="border-b border-white/60 pb-1 text-xs font-semibold transition-colors hover:border-white">{social.label} ↗</a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
