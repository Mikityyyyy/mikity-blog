import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { contentPillars, currentGoals, siteDescription, siteUrl, socialLinks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "走る、挙げる、働く、学ぶ。Mikityとmikitylifeについて。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <StructuredData
        type="person"
        data={{ name: "Mikity", url: siteUrl, description: siteDescription, socialLinks: socialLinks.map((social) => social.href) }}
      />

      <header className="editorial-grid border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:px-12 lg:py-24">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden border border-[var(--border)] bg-[#d8d2c5]">
            <Image src="/profile.png" alt="Mikity" fill priority sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
            <p className="absolute bottom-4 left-4 bg-[var(--background)] px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em]">MIKITY / TOKYO</p>
          </div>
          <div className="pb-2">
            <p className="eyebrow text-[var(--accent)]">ABOUT THE AUTHOR</p>
            <h1 className="mt-5 text-[clamp(3.3rem,8vw,7.5rem)] font-black leading-[1.05] tracking-[-0.08em]">全部やりたい。<br />だから、記録する。</h1>
            <p className="mt-8 max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">走る、挙げる、働く、学ぶ。どれか一つを選ぶのではなく、どうすれば全部続けられるのかを試している会社員です。</p>
          </div>
        </div>
      </header>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.55fr_1fr] lg:px-12 lg:py-28">
          <div>
            <p className="eyebrow text-[var(--accent)]">WHY THIS SITE</p>
            <p className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.04em] sm:text-5xl">No perfect routine.<br />Just the process.</p>
          </div>
          <div className="space-y-7 text-base leading-[2.1] text-[#3f3e38] sm:text-lg">
            <p>結果が出たあとから振り返ると、何もかも計画どおりだったように見えます。でも実際には、予定を守れない日も、仕事で余裕がなくなる日も、トレーニングがまったく噛み合わない日もあります。</p>
            <p>mikitylifeは、そうした途中経過をきれいに隠さず残すためのブログです。誰かに正解を教える場所ではなく、自分が考え、試し、また考え直した記録を置いていきます。</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[#1b1b17] text-[#f2efe7]">
        <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 border-b border-white/25 pb-5">
            <p className="eyebrow text-[#e4775f]">CURRENT NUMBERS</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-6xl">いまの現在地。</h2>
          </div>
          <div className="grid border-l border-t border-white/20 md:grid-cols-3">
            {currentGoals.map((goal) => (
              <div key={goal.label} className="border-b border-r border-white/20 p-6 sm:p-8">
                <p className="eyebrow text-white/45">{goal.label}</p>
                <p className="mt-8 font-serif text-4xl italic sm:text-5xl">{goal.current}</p>
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[#e4775f]">NEXT → {goal.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="eyebrow text-[var(--accent)]">THE FOUR LENSES</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em]">書くこと。</h2>
          </div>
          <div className="border-t border-[var(--foreground)]">
            {contentPillars.map((pillar) => (
              <div key={pillar.title} className="grid gap-4 border-b border-[var(--border)] py-7 sm:grid-cols-[5rem_10rem_1fr] sm:items-start">
                <p className="font-serif text-2xl italic text-[var(--accent)]">{pillar.number}</p>
                <div>
                  <p className="text-lg font-semibold">{pillar.title}</p>
                  <p className="text-xs text-[var(--muted)]">{pillar.jaTitle}</p>
                </div>
                <p className="text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          <Link href="/blog" className="bg-[var(--foreground)] px-6 py-3 text-xs font-semibold tracking-[0.12em] text-[var(--background)] transition-colors hover:bg-[var(--accent)]">記事を読む →</Link>
          <Link href="/" className="border border-[var(--foreground)] px-6 py-3 text-xs font-semibold tracking-[0.12em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">HOMEへ戻る</Link>
        </div>
      </section>
    </div>
  );
}
