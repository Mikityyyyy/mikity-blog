import type { Metadata } from "next";
import Link from "next/link";
import { socialLinks } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Mikityへのお問い合わせはこちらから。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contacts = socialLinks.filter((social) => ["Instagram", "X"].includes(social.label));

  return (
    <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-4xl flex-col justify-center px-6 py-20 sm:px-8">
      <p className="eyebrow text-[var(--accent)]">Contact</p>
      <h1 className="mt-5 font-serif text-[clamp(2.8rem,8vw,4rem)] leading-none tracking-[-0.06em]">Say hello.</h1>
      <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)]">お仕事、コラボレーション、記事への感想などは、InstagramまたはXのDMからお願いします。</p>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-y border-[var(--border)] py-6">
        {contacts.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-sm transition-colors hover:text-[var(--accent)]">
            {social.label} <span className="text-[var(--muted)]">{social.handle}</span> ↗
          </a>
        ))}
      </div>

      <Link href="/" className="mt-10 text-xs text-[var(--muted)]">← Back home</Link>
    </div>
  );
}
