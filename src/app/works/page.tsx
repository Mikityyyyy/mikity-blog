import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Works",
  description: "Mikityが自分の生活のために作ったアプリやツール。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <header className="max-w-3xl">
        <p className="eyebrow text-[var(--accent)]">Works / Things I made</p>
        <h1 className="mt-5 font-serif text-[clamp(2.8rem,7vw,4rem)] leading-none tracking-[-0.06em]">Works.</h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)]">自分の生活で困ったことを、自分で作って解決してみた記録です。</p>
      </header>

      <section className="mt-14 border-t border-[var(--border)]">
        {works.map((work, index) => (
          <Link
            key={work.slug}
            href={`/works/${work.slug}`}
            className="group grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14"
          >
            <div className="relative aspect-video overflow-hidden bg-[#1e1c19]">
              {work.video && (
                <Image
                  src={work.video.poster}
                  alt={`${work.title}の画面`}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <div>
              <div className="flex items-center gap-4 text-[0.65rem] tracking-[0.08em] text-[var(--muted)]">
                <span className="font-serif text-xs italic text-[var(--accent)]">0{index + 1}</span>
                <span>{work.category.toUpperCase()}</span>
                <span>{work.year}</span>
              </div>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.05em] transition-colors group-hover:text-[var(--accent)]">{work.title}</h2>
              <p className="mt-4 text-base font-medium tracking-[-0.02em]">{work.tagline}</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">{work.overview[0]}</p>
              <p className="mt-7 text-xs">
                <span className="border-b border-[var(--foreground)] pb-1 transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">View project</span>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
