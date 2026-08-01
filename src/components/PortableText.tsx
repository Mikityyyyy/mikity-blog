import type { ComponentProps } from "react";
import { PortableText as SanityPortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export type PortableTextValue = ComponentProps<typeof SanityPortableText>["value"];

interface PortableTextProps {
  value: PortableTextValue;
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      return (
        <figure className="my-12">
          <Image
            src={urlFor(value).width(1200).fit("max").auto("format").url()}
            alt={value.alt || ""}
            width={1200}
            height={800}
            className="h-auto w-full border border-[var(--border)]"
          />
          {value.alt && <figcaption className="mt-3 text-center text-xs text-[var(--muted)]">{value.alt}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => <h2 className="mb-6 mt-16 text-3xl font-black leading-snug tracking-[-0.04em] sm:text-4xl">{children}</h2>,
    h2: ({ children }) => <h2 className="mb-6 mt-16 border-t border-[var(--border)] pt-7 text-3xl font-black leading-snug tracking-[-0.04em] sm:text-4xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 mt-12 text-2xl font-bold leading-snug tracking-[-0.03em]">{children}</h3>,
    normal: ({ children }) => <p className="mb-7 text-base leading-[2.1] text-[#3f3e38] sm:text-[1.05rem]">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-10 border-l-4 border-[var(--accent)] bg-[#e8e3d7] px-6 py-5 text-lg font-medium leading-9">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-8 list-disc space-y-3 pl-6 text-[#3f3e38] marker:text-[var(--accent)]">{children}</ul>,
    number: ({ children }) => <ol className="mb-8 list-decimal space-y-3 pl-6 text-[#3f3e38] marker:font-semibold marker:text-[var(--accent)]">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[var(--foreground)]">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="bg-[#ded9cd] px-1.5 py-1 font-mono text-sm text-[var(--accent)]">{children}</code>,
    link: ({ value, children }) => {
      const rawHref = value?.href || "#";
      const safeHref = /^(https?:\/\/|\/|#|mailto:)/i.test(rawHref) ? rawHref : "#";
      const external = /^https?:\/\//i.test(safeHref);
      return (
        <a href={safeHref} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="font-medium text-[var(--accent)] underline decoration-1">
          {children}
        </a>
      );
    },
  },
};

export default function PortableText({ value }: PortableTextProps) {
  if (!value) return null;
  return <SanityPortableText value={value} components={components} />;
}
