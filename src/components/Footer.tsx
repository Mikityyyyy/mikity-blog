import Link from "next/link";
import { socialLinks } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-[-0.04em]">mikitylife<span className="text-[var(--accent)]">.</span></p>
            <p className="mt-3 text-sm text-[var(--muted)]">全部欲しがる会社員の、途中経過。</p>
          </div>
          <div className="flex max-w-xl flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-[var(--border)] pt-5 text-[0.68rem] text-[var(--muted)]">
          <p>© {new Date().getFullYear()} mikitylife</p>
          <Link href="/contact" className="hover:text-[var(--foreground)]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
