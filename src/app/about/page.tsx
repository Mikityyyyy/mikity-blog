import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { currentGoals, siteDescription, siteUrl, socialLinks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "IT企業で働きながら、筋トレを中心にHYROXやマラソンにも取り組むMikityのプロフィール。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="site-shell journal-section">
      <StructuredData type="person" data={{ name: "Mikity", url: siteUrl, description: siteDescription, socialLinks: socialLinks.map((social) => social.href) }} />

      <header className="grid gap-14 lg:grid-cols-[15rem_1fr] lg:items-start">
        <div>
          <div className="relative h-72 w-56 overflow-hidden rounded-sm bg-[var(--surface)]">
            <Image src="/profile.png" alt="Mikity" fill priority sizes="224px" className="scale-[1.08] object-cover grayscale-[12%]" />
          </div>
          <p className="mt-3 text-xs tracking-[0.08em] text-[var(--muted)]">MIKITY / TOKYO</p>
        </div>

        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--accent)]">About / Mikity</p>
          <h1 className="mt-5 text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.6] tracking-[-0.025em]">29歳会社員 ×<br />Hybrid Athlete</h1>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>IT企業でBizDevとマーケティングを担当しています。仕事の合間に筋トレを続けながら、HYROXやマラソンにも挑戦しています。</p>
            <p>英語で議論できるようになること、AIを仕事で使いこなすことも目標です。運動も学びも、日々試しながら続けています。</p>
          </div>
        </div>
      </header>

      <section className="mt-24 border-y border-[var(--border)] py-12 lg:mt-32">
        <h2 className="eyebrow text-[var(--accent-dark)]">Training goals<span className="ml-4 font-normal tracking-normal text-[var(--muted)]">記録と目標</span></h2>
        <div className="mt-9 grid gap-10 sm:grid-cols-3">
          {currentGoals.map((goal) => (
            <div key={goal.label}>
              <p className="text-xs text-[var(--muted)]">{goal.label}</p>
              <p className="mt-3 font-serif text-3xl tracking-[-0.03em]">{goal.current}</p>
              <p className="mt-2 text-xs tracking-[0.08em] text-[var(--accent-dark)]">目標 / {goal.target}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 pt-16 lg:grid-cols-[16rem_1fr] lg:pt-20">
        <p className="eyebrow text-[var(--accent)]">Why I write</p>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium leading-relaxed">このブログについて</h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">練習や大会の記録、仕事での気づき、学んだこと。実際に試した経験を、あとから読み返せる形に残すためのブログです。うまくいかなかったことも含めて書いていきます。</p>
          <div className="mt-7 flex flex-wrap items-center gap-7 text-sm">
            <Link href="/blog" className="text-link">記事一覧へ<span aria-hidden="true">→</span></Link>
            <Link href="/" className="text-[var(--muted)]">トップへ戻る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
