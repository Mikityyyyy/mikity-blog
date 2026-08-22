import type { Metadata } from "next";
import { Archivo, Noto_Sans_JP, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDescription, siteUrl } from "@/lib/site-content";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "mikitylife | Work. Train. Learn. Live.",
    template: "%s | mikitylife",
  },
  description: siteDescription,
  keywords: ["Mikity", "HYROX", "ランニング", "筋トレ", "会社員", "英語学習", "AI活用"],
  authors: [{ name: "Mikity", url: siteUrl }],
  creator: "Mikity",
  alternates: { canonical: "/" },
  openGraph: {
    title: "mikitylife | Work. Train. Learn. Live.",
    description: siteDescription,
    url: siteUrl,
    siteName: "mikitylife",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-editorial-v2.png", width: 1732, height: 908, alt: "mikitylife — 29歳会社員 × Hybrid Athlete" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "mikitylife | Work. Train. Learn. Live.",
    description: siteDescription,
    creator: "@mikity__97",
    images: ["/og-editorial-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_ID || "G-PEJLDFPW4N";

  return (
    <html lang="ja" className={`${archivo.variable} ${notoSansJP.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaTrackingId}', { page_path: window.location.pathname });
            `,
          }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
