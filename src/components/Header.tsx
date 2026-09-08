"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { socialLinks } from "@/lib/site-content";

const navItems = [{ label: "Journal", href: "/blog" }, { label: "About", href: "/about" }];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const instagram = socialLinks.find((social) => social.label === "Instagram");
  const youtube = socialLinks.find((social) => social.label === "YouTube");

  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);

  return <header className="masthead">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:block focus:p-4">本文へ移動</a>
    <div className="site-shell masthead-inner">
      <Link href="/" className="wordmark" onClick={() => setIsOpen(false)}>mikitylife<span className="text-[var(--accent)]">.</span></Link>
      <nav className="header-links" aria-label="メインナビゲーション">
        {navItems.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        <div className="header-social">
          {instagram && <a className="icon-link" href={instagram.href} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>}
          {youtube && <a className="icon-link" href={youtube.href} target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube size={20} /></a>}
        </div>
      </nav>
      <button className="mobile-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={isOpen} aria-controls="mobile-nav">
        <span className="relative block h-4 w-5" aria-hidden="true"><span className={`absolute left-0 top-1 h-px w-5 bg-current ${isOpen ? "translate-y-1 rotate-45" : ""}`} /><span className={`absolute bottom-1 left-0 h-px w-5 bg-current ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`} /></span>
      </button>
    </div>
    {isOpen && <nav id="mobile-nav" className="site-shell mobile-nav sm:hidden" aria-label="モバイルナビゲーション">
      {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}
      {instagram && <a href={instagram.href} target="_blank" rel="noreferrer">Instagram ↗</a>}
    </nav>}
  </header>;
}
