import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "PALUGADA — Solusi Digital untuk Bisnis",
    template: "%s | PALUGADA",
  },

  description:
    "PALUGADA membantu bisnis, UMKM, dan brand membangun website profesional, branding, dan solusi digital modern.",

  keywords: [
    "PALUGADA",
    "jasa website",
    "jasa pembuatan website",
    "website profesional",
    "website UMKM",
    "digital agency Indonesia",
    "branding",
    "digital marketing",
    "web development",
    "solusi digital bisnis",
  ],

  authors: [
    {
      name: "PALUGADA",
    },
  ],

  creator: "PALUGADA",
  publisher: "PALUGADA",

  applicationName: "PALUGADA",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "PALUGADA",

    title: "PALUGADA — Solusi Digital untuk Bisnis",

    description:
      "Website profesional, branding, dan solusi digital modern untuk bisnis, UMKM, dan brand.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PALUGADA — Solusi Digital untuk Bisnis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "PALUGADA — Solusi Digital untuk Bisnis",

    description:
      "Website profesional, branding, dan solusi digital modern untuk bisnis, UMKM, dan brand.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}