import Link from "next/link";
import type { IconType } from "react-icons";
import { FaInstagram, FaThreads, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiNote } from "react-icons/si";
import { socialLinks } from "@/lib/site-content";

const socialIcons: Record<(typeof socialLinks)[number]["label"], IconType> = {
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  TikTok: FaTiktok,
  Threads: FaThreads,
  X: FaXTwitter,
  note: SiNote,
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="flex flex-col gap-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-[-0.04em]">mikitylife<span className="text-[var(--accent)]">.</span></p>
            <p className="mt-3 text-sm text-[var(--muted)]">Work. Train. Learn. Live.</p>
          </div>
          <div className="flex items-center gap-1" aria-label="SNSリンク">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <Icon size={18} aria-hidden="true" />
                  <span className="sr-only">{social.label}</span>
                </a>
              );
            })}
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
