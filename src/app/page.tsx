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
    return await getLatestPosts(4);
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await loadLatestPosts();
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);
  const instagram = socialLinks.find((social) => social.label === "Instagram");

  return (
    <>
      <StructuredData type="website" data={{ name: "mikitylife", url: siteUrl, description: siteDescription }} />

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:px-8 lg:pb-16 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow text-[var(--accent)]">Mikity&apos;s personal journal</p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.15rem,4.8vw,3.85rem)] font-semibold leading-[1.32] tracking-[-0.045em]">
              働く。走る。学ぶ。<br />全部を続けるための記録。
            </h1>
          </div>
          <p className="max-w-md text-sm leading-8 text-[var(--muted)]">
            会社員として働きながら、HYROX、マラソン、英語、AIに取り組むMikityのブログ。答えよりも、そこへ向かう途中を書きます。
          </p>
        </div>
      </section>

      {featuredPost ? (
        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:pb-32">
          <Link href={`/blog/${featuredPost.slug.current}`} className="group grid overflow-hidden rounded-sm bg-[var(--surface)] lg:grid-cols-[1.45fr_0.75fr]">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[31rem]">
              {getPostImage(featuredPost) ? (
                <Image
                  src={getPostImage(featuredPost)!}
                  alt={featuredPost.mainImage?.alt || featuredPost.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.015]"
                />
              ) : (
                <div className="flex h-full min-h-72 items-end p-8 sm:p-12">
                  <span className="font-serif text-7xl text-[var(--accent)]">01</span>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between gap-5 text-[0.64rem] tracking-[0.08em] text-[var(--muted)]">
                  <span>{featuredPost.categories?.[0]?.title || "JOURNAL"}</span>
                  <time dateTime={featuredPost.publishedAt}>{new Intl.DateTimeFormat("ja-JP").format(new Date(featuredPost.publishedAt))}</time>
                </div>
                <p className="eyebrow mt-10 text-[var(--accent)]">Featured story</p>
                <h2 className="mt-4 text-2xl font-medium leading-[1.55] tracking-[-0.035em] sm:text-3xl">{featuredPost.title}</h2>
                {featuredPost.excerpt && <p className="mt-5 line-clamp-3 text-sm leading-7 text-[var(--muted)]">{featuredPost.excerpt}</p>}
              </div>
              <span className="mt-10 text-xs font-medium transition-colors group-hover:text-[var(--accent)]">記事を読む →</span>
            </div>
          </Link>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:pb-32">
          <div className="flex min-h-72 items-end rounded-sm bg-[var(--surface)] p-8 sm:p-12">
            <div>
              <p className="eyebrow text-[var(--accent)]">Coming soon</p>
              <p className="mt-4 text-xl font-medium">最初の記事を準備しています。</p>
            </div>
          </div>
        </section>
      )}

      {latestPosts.length > 0 && (
        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="eyebrow text-[var(--accent)]">Latest stories</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">新着記事</h2>
              </div>
              <Link href="/blog" className="hidden text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)] sm:block">すべての記事を見る →</Link>
            </div>

            <div className="mt-10 grid gap-x-7 gap-y-14 md:grid-cols-3">
              {latestPosts.map((post, index) => {
                const image = getPostImage(post);

                return (
                  <article key={post._id}>
                    <Link href={`/blog/${post.slug.current}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--surface)]">
                        {image ? (
                          <Image src={image} alt={post.mainImage?.alt || post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                        ) : (
                          <div className="flex h-full items-end justify-between p-6">
                            <span className="font-serif text-5xl text-[var(--accent)]">{String(index + 2).padStart(2, "0")}</span>
                            <span className="text-[0.6rem] tracking-[0.12em] text-[var(--muted)]">JOURNAL</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-5 flex items-center justify-between gap-4 text-[0.65rem] text-[var(--muted)]">
                        <span className="tracking-[0.08em]">{post.categories?.[0]?.title || "LIFE"}</span>
                        <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("ja-JP").format(new Date(post.publishedAt))}</time>
                      </div>
                      <h3 className="mt-3 text-[1.05rem] font-medium leading-7 tracking-[-0.02em] transition-colors group-hover:text-[var(--accent)]">{post.title}</h3>
                    </Link>
                  </article>
                );
              })}
            </div>

            <Link href="/blog" className="mt-10 inline-flex text-xs text-[var(--muted)] sm:hidden">すべての記事を見る →</Link>
          </div>
        </section>
      )}

      <section className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[17rem_1fr] lg:py-28">
          <div>
            <p className="eyebrow text-[var(--accent)]">Topics</p>
            <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.035em]">このブログで<br />書いていること。</h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {contentPillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-[var(--border)] pt-5">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="text-xs font-semibold tracking-[0.1em]">{pillar.title}</h3>
                  <span className="text-[0.62rem] text-[var(--accent)]">{pillar.number}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[13rem_1fr] lg:items-center lg:gap-20">
          <div className="relative aspect-square w-44 overflow-hidden rounded-full bg-[var(--surface)] sm:w-52">
            <Image src="/profile.png" alt="Mikity" fill sizes="208px" className="scale-[1.12] object-cover grayscale-[12%]" />
          </div>
          <div className="max-w-2xl">
            <p className="eyebrow text-[var(--accent)]">About Mikity</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">29歳会社員 × Hybrid Athlete</h2>
            <p className="mt-5 text-sm leading-8 text-[var(--muted)]">IT企業でBizDevとマーケティングに向き合いながら、走る、挙げる、働く、学ぶ。完成した姿ではなく、全部を諦めないための途中経過を記録しています。</p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <Link href="/about" className="font-medium transition-colors hover:text-[var(--accent)]">プロフィールを読む →</Link>
              {instagram && <a href={instagram.href} target="_blank" rel="noreferrer" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">Instagram ↗</a>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
