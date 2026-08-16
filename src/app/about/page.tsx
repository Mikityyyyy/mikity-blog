import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { currentGoals, siteDescription, siteUrl, socialLinks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "走る、挙げる、働く、学ぶ。Mikityとmikitylifeについて。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <StructuredData type="person" data={{ name: "Mikity", url: siteUrl, description: siteDescription, socialLinks: socialLinks.map((social) => social.href) }} />

      <header className="grid gap-14 lg:grid-cols-[15rem_1fr] lg:items-start">
        <div>
          <div className="relative h-72 w-56 overflow-hidden bg-[#e9e6df]">
            <Image src="/profile.png" alt="Mikity" fill priority sizes="224px" className="object-cover grayscale-[25%]" />
          </div>
          <p className="mt-3 text-[0.65rem] font-semibold tracking-[0.08em] text-[var(--muted)]">MIKITY — 29 / TOKYO</p>
        </div>

        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--accent)]">About / Mikity</p>
          <h1 className="mt-5 text-[clamp(2.55rem,7vw,3.8rem)] font-black leading-[1.12] tracking-[-0.055em]">29歳会社員 ×<br />Hybrid Athlete.</h1>
          <div className="mt-10 max-w-2xl space-y-6 text-sm leading-8 text-[var(--muted)] sm:text-base">
            <p>IT企業でBizDevとマーケティングに向き合いながら、走る、挙げる、働く、学ぶ。どれか一つを選ばず、どうすれば全部続けられるのかを試しています。</p>
            <p>HYROX、マラソン、筋力トレーニング、英語、AI。成功した結果だけではなく、そこへ向かう途中を記録しています。</p>
          </div>
        </div>
      </header>

      <section className="mt-24 border-y border-[var(--border)] py-12 lg:mt-32">
        <p className="eyebrow text-[var(--accent)]">Current numbers</p>
        <div className="mt-9 grid gap-10 sm:grid-cols-3">
          {currentGoals.map((goal) => (
            <div key={goal.label}>
              <p className="text-xs text-[var(--muted)]">{goal.label}</p>
              <p className="mt-3 text-3xl font-black tracking-[-0.04em]">{goal.current}</p>
              <p className="mt-2 text-[0.65rem] tracking-[0.08em] text-[var(--accent)]">NEXT / {goal.target}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 py-24 lg:grid-cols-[16rem_1fr] lg:py-32">
        <p className="eyebrow text-[var(--accent)]">Why I write</p>
        <div className="max-w-2xl">
          <p className="text-3xl font-black leading-[1.35] tracking-[-0.045em] sm:text-4xl">No perfect routine.<br />Just the process.</p>
          <p className="mt-7 text-sm leading-8 text-[var(--muted)]">誰かに正解を教えるためではなく、試し、失敗し、調整して、また動き出す。その過程を正直に残すために書いています。</p>
          <div className="mt-9 flex gap-7 text-xs">
            <Link href="/blog" className="border-b border-[var(--foreground)] pb-1">Read the stories</Link>
            <Link href="/" className="text-[var(--muted)]">Back home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
