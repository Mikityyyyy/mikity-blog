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
          <p className="mt-3 text-[0.65rem] tracking-[0.08em] text-[var(--muted)]">MIKITY — TOKYO</p>
        </div>

        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--muted)]">About</p>
          <h1 className="mt-5 text-[clamp(3.2rem,8vw,6rem)] font-medium leading-[1.15] tracking-[-0.07em]">全部やりたい。<br />だから、記録する。</h1>
          <div className="mt-10 max-w-2xl space-y-6 text-sm leading-8 text-[var(--muted)] sm:text-base">
            <p>走る、挙げる、働く、学ぶ。どれか一つを選ぶのではなく、どうすれば全部続けられるのかを試している会社員です。</p>
            <p>mikitylifeは、成功談だけをきれいに並べる場所ではありません。予定を守れない日や、仕事で余裕がなくなる日まで含めて、考えたことを残すためのブログです。</p>
          </div>
        </div>
      </header>

      <section className="mt-24 border-y border-[var(--border)] py-12 lg:mt-32">
        <p className="eyebrow text-[var(--muted)]">Current numbers</p>
        <div className="mt-9 grid gap-10 sm:grid-cols-3">
          {currentGoals.map((goal) => (
            <div key={goal.label}>
              <p className="text-xs text-[var(--muted)]">{goal.label}</p>
              <p className="mt-3 font-serif text-3xl tracking-[-0.04em]">{goal.current}</p>
              <p className="mt-2 text-[0.65rem] text-[var(--accent)]">次の目標　{goal.target}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 py-24 lg:grid-cols-[16rem_1fr] lg:py-32">
        <p className="eyebrow text-[var(--muted)]">Why I write</p>
        <div className="max-w-2xl">
          <p className="font-serif text-3xl italic leading-[1.45] tracking-[-0.035em] sm:text-4xl">No perfect routine.<br />Just the process.</p>
          <p className="mt-7 text-sm leading-8 text-[var(--muted)]">誰かに正解を教えるためではなく、自分が考え、試し、また考え直した過程を置いていきます。</p>
          <div className="mt-9 flex gap-7 text-xs">
            <Link href="/blog" className="border-b border-[var(--foreground)] pb-1">記事を読む</Link>
            <Link href="/" className="text-[var(--muted)]">ホームへ戻る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
