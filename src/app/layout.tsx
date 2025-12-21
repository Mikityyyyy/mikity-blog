import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Mikity | Creative Designer & Developer",
    template: "%s | Mikity"
  },
  description: "Official portfolio and blog of Mikity. Creative Designer & Developer based in Japan.",
  keywords: ["Mikity", "Designer", "Developer", "Rakuten Mobile", "Tigers", "Tech", "Portfolio"],
  authors: [{ name: "Mikity" }],
  creator: "Mikity",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mikityyyyy.com",
    siteName: "Mikity",
    title: "Mikity | Creative Designer & Developer",
    description: "Technology and Design.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PEJLDFPW4N'

  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
       <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-white/20">
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
          <main className="flex-grow pt-24 pb-20 px-6 max-w-5xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
