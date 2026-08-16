"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/lib/site-content";

const navItems = [
  { label: "Stories", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const instagram = socialLinks.find((social) => social.label === "Instagram");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(245,243,238,0.94)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-black tracking-[-0.035em]">
          <span className="h-2.5 w-2.5 bg-[var(--accent)]" aria-hidden="true" />
          mikitylife.
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-[0.68rem] font-semibold tracking-[0.06em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
          {instagram && (
            <a href={instagram.href} target="_blank" rel="noreferrer" className="text-[0.68rem] font-semibold tracking-[0.06em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              Instagram ↗
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          <span className={`block h-px w-5 bg-[var(--foreground)] transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-[var(--foreground)] transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="fixed inset-x-0 top-20 flex min-h-[calc(100dvh-5rem)] flex-col bg-[var(--background)] px-6 py-12 md:hidden" aria-label="モバイルナビゲーション">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="border-b border-[var(--border)] py-5 text-3xl font-black tracking-[-0.04em]">
              {item.label}
            </Link>
          ))}
          {instagram && (
            <a href={instagram.href} target="_blank" rel="noreferrer" className="mt-auto text-sm text-[var(--muted)]">
              Instagram ↗
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
