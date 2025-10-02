import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderNav from "../components/ui/HeaderNav";
import Footer from "../components/ui/Footer";
import CookieBanner from "../components/ui/CookieBanner";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scalable - Mehr Lebenszeit",
  description: "Einfach gesünder Leben Tag für Tag.",
  keywords: [
    "Longevity",
    "Gesundheit",
    "Biologisches Alter",
    "Umfrage",
    "Lebensstil verbessern",
  ],
  authors: [{ name: "Scalable Team", url: "https://scalable-longevity.com" }],
  metadataBase: new URL("https://scalable-longevity.com"),
  openGraph: {
    title: "Scalable - Mehr gesunde Lebenszeit",
    description:
      "Dein Weg zu mehr gesunder Lebenszeit. Einfach. Verständlich. Wissenschaftlich fundiert.",
    url: "https://scalable-longevity.com",
    siteName: "Scalable",
    images: [
      {
        url: "/background.jpg",
        width: 1200,
        height: 630,
        alt: "Scalable - Mehr gesunde Lebenszeit",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalable - Mehr Lebenszeit",
    description: "Simple Changes für langfristiges Wohlbefinden.",
    images: ["/background.jpg"],
    creator: "@deinTwitterHandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Scalable",
              url: "https://scalable-longevity.com",
              logo: "https://scalable-longevity.com/logo.png",
            }),
          }}
        />
      </head>
      <body className={`${satoshi.variable} antialiased`}>
        <HeaderNav />
        {children}
        <Footer />
        <CookieBanner />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
