import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mikity - 公式サイト & ブログ",
  description: "テクノロジーとデザインについて発信するMikityの公式サイト。最新の技術トレンドや実践的なノウハウを共有しています。",
  keywords: ["Mikity", "テクノロジー", "デザイン", "ブログ", "プログラミング"],
  authors: [{ name: "Mikity" }],
  creator: "Mikity",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mikityyyyy.com",
    siteName: "Mikity",
    title: "Mikity - 公式サイト & ブログ",
    description: "テクノロジーとデザインについて発信するMikityの公式サイト。最新の技術トレンドや実践的なノウハウを共有しています。",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mikity",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
