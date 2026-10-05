import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteUrl } from "@/lib/site-content";
import { getWork, works } from "@/lib/works";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "作品が見つかりません" };

  const title = `${work.title} — ${work.tagline}`;
  const description = work.overview[0];

  return {
    title,
    description,
    alternates: { canonical: `/works/${work.slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteUrl}/works/${work.slug}`,
      images: [{ url: work.ogImage, width: 1200, height: 630, alt: work.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [work.ogImage],
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const host = work.url ? new URL(work.url).host : null;

  return (
    <article>
      <header className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 lg:pt-28">
        <Link href="/works" className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
          ← Works
        </Link>
        <p className="eyebrow mt-10 text-[var(--accent)]">{work.category} / {work.year}</p>
        <h1 className="mt-5 font-serif text-[clamp(3rem,8vw,5rem)] leading-none tracking-[-0.06em]">{work.title}</h1>
        <p className="mt-6 text-xl font-medium tracking-[-0.03em] sm:text-2xl">{work.tagline}</p>
      </header>

      {work.video && (
        <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-8 lg:mt-16">
          <div className="overflow-hidden bg-[#171614]">
            <video
              className="block h-auto w-full"
              src={work.video.src}
              poster={work.video.poster}
              width={work.video.width}
              height={work.video.height}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label={`${work.title}のデモ動画`}
            />
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[15rem_1fr] lg:py-24">
        <dl className="space-y-6 border-t border-[var(--border)] pt-6 text-sm">
          <div>
            <dt className="eyebrow text-[var(--muted)]">Role</dt>
            <dd className="mt-2">{work.role}</dd>
          </div>
          <div>
            <dt className="eyebrow text-[var(--muted)]">Year</dt>
            <dd className="mt-2">{work.year}</dd>
          </div>
          {work.url && host && (
            <div>
              <dt className="eyebrow text-[var(--muted)]">Live</dt>
              <dd className="mt-2">
                <a href={work.url} target="_blank" rel="noreferrer" className="border-b border-[var(--foreground)] pb-0.5 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  {host} ↗
                </a>
              </dd>
            </div>
          )}
        </dl>

        <div className="max-w-2xl">
          <p className="eyebrow text-[var(--accent)]">Overview</p>
          <div className="mt-6 space-y-5 text-sm leading-8 text-[var(--muted)] sm:text-base">
            {work.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="eyebrow mt-16 text-[var(--accent)]">Features</p>
          <div className="mt-6 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {work.features.map((feature, index) => (
              <div key={feature.title} className="border-t border-[var(--border)] pt-4">
                <span className="font-serif text-xs italic text-[var(--accent)]">0{index + 1}</span>
                <h2 className="mt-2 text-base font-medium tracking-[-0.02em]">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex gap-7 text-xs">
            {work.url && (
              <a href={work.url} target="_blank" rel="noreferrer" className="border-b border-[var(--foreground)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                Open the app ↗
              </a>
            )}
            <Link href="/works" className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">All works</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
