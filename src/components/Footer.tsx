import Link from "next/link";
import { socialLinks } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#1b1b17] text-[#f2efe7]">
      <div className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5 text-[#e4775f]">MIKITY LIFE / FIELD NOTES</p>
            <p className="max-w-xl text-3xl font-semibold leading-[1.35] tracking-[-0.05em] sm:text-5xl">
              全部欲しがる会社員の、<br />途中経過。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 border-t border-white/20">
            {socialLinks.map(({ href, label, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-white/20 py-4 text-sm transition-colors hover:text-[#e4775f]"
              >
                <span className="block font-semibold">{label} ↗</span>
                <span className="block text-[0.68rem] text-white/45">{handle}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs tracking-[0.08em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MIKITYLIFE</p>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-white">ABOUT</Link>
            <Link href="/contact" className="hover:text-white">CONTACT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
