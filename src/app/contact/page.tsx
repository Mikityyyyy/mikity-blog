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
    <div className="editorial-grid min-h-[calc(100svh-5rem)]">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow text-[var(--accent)]">CONTACT / SAY HELLO</p>
        <h1 className="mt-5 font-serif text-[clamp(4rem,12vw,8rem)] leading-none tracking-[-0.08em]">Let&apos;s talk.</h1>
        <p className="mt-8 max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">ご連絡は、InstagramまたはXのDMからお願いします。記事や発信についての感想も歓迎です。</p>

        <div className="mt-14 grid border-l border-t border-[var(--border)] sm:grid-cols-2">
          {contacts.map((social, index) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="group min-h-52 border-b border-r border-[var(--border)] bg-[rgba(242,239,231,0.7)] p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <span className="eyebrow text-[var(--muted)]">0{index + 1}</span>
                <span className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span>
              </div>
              <p className="mt-16 text-3xl font-semibold tracking-[-0.04em] group-hover:text-[var(--accent)]">{social.label}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{social.handle}</p>
            </a>
          ))}
        </div>

        <Link href="/" className="mt-12 inline-flex border-b border-[var(--foreground)] pb-1 text-xs font-semibold tracking-[0.12em]">← HOME</Link>
      </div>
    </div>
  );
}
