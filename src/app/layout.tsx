import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mikity - Creative Designer & Developer",
    template: "%s | Mikity"
  },
  description: "テクノロジーとデザインの交差点で、意味のある体験を創造するクリエイター。楽天モバイル、阪神タイガース、最新ガジェットについて発信。",
  keywords: ["Mikity", "Creative Designer", "Developer", "楽天モバイル", "阪神タイガース", "テクノロジー", "ガジェット", "モバイル", "UI/UX"],
  authors: [{ name: "Mikity" }],
  creator: "Mikity",
  verification: {
    google: "-GBhaochz-mgf_lL17pASiaD2YNCGkQe4BLM8dmnu3s",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mikityyyyy.com",
    siteName: "Mikity",
    title: "Mikity - Creative Designer & Developer",
    description: "テクノロジーとデザインの交差点で、意味のある体験を創造するクリエイター。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mikity - Creative Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mikity",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://mikityyyyy.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PEJLDFPW4N'

  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
