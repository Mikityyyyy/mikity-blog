"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/lib/site-content";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "STORIES", href: "/blog" },
  { label: "ABOUT", href: "/about" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(242,239,231,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-serif text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
          mikitylife<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
          {instagram && (
            <a
              href={instagram.href}
              target="_blank"
              rel="noreferrer"
              className="border-l border-[var(--border)] pl-8 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              INSTAGRAM ↗
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="メニューを開く"
          aria-expanded={isOpen}
        >
          <span className={`block h-px w-5 bg-[var(--foreground)] transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-[var(--foreground)] transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="editorial-grid fixed inset-x-0 top-20 flex min-h-[calc(100dvh-5rem)] flex-col bg-[var(--background)] px-6 py-12 md:hidden" aria-label="モバイルナビゲーション">
          <p className="eyebrow mb-8 text-[var(--accent)]">MENU / 03</p>
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-baseline justify-between border-t border-[var(--border)] py-5 font-serif text-4xl tracking-[-0.04em]"
            >
              {item.label}
              <span className="font-sans text-xs text-[var(--muted)]">0{index + 1}</span>
            </Link>
          ))}
          {instagram && (
            <a href={instagram.href} target="_blank" rel="noreferrer" className="mt-auto border-t border-[var(--border)] pt-6 text-sm font-semibold tracking-[0.15em]">
              INSTAGRAM ↗
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
