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
      <h1 className="mt-5 text-3xl font-medium leading-relaxed tracking-[-0.025em]">お問い合わせ</h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">お仕事のご相談や記事への感想は、InstagramまたはXのDMからお願いします。</p>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-y border-[var(--border)] py-6">
        {contacts.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-sm transition-colors hover:text-[var(--accent)]">
            {social.label} <span className="text-[var(--muted)]">{social.handle}</span> ↗
          </a>
        ))}
      </div>

      <Link href="/" className="mt-10 text-sm text-[var(--muted)]">← トップへ戻る</Link>
    </div>
  );
}
