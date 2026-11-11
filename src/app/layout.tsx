import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060A14",
  colorScheme: "dark",
};

const SITE_URL = "https://eco.co-id.id";
const SITE_TITLE = "ecoDigital — Jasa Pembuatan Website & Aplikasi Custom | Direct Developer";
const SITE_DESC =
  "Jasa pembuatan website & sistem aplikasi custom terpercaya. Diskusi langsung sama developer tanpa perantara sales. Melayani tugas akhir/skripsi, sistem informasi instansi, web sekolah, aplikasi UMKM, dan perbaikan bug/error kodingan. Bergaransi & transparan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | ecoDigital",
  },
  description: SITE_DESC,
  applicationName: "ecoDigital",
  authors: [{ name: "ecoDigital", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "jasa pembuatan website",
    "jasa bikin web",
    "jasa website custom",
    "jasa pembuatan aplikasi",
    "jasa tugas akhir informatika",
    "jasa skripsi sistem informasi",
    "jasa bimbingan koding",
    "jasa perbaikan error koding",
    "jasa fix bug php laravel",
    "jasa web sekolah",
    "jasa website umkm",
    "jasa coding direct developer",
    "ecoDigital",
    "jasa sistem informasi",
    "jasa pembuatan sistem spk",
    "jasa web murah profesional",
    "buat website tugas akhir",
    "joki coding amanah terpercaya",
  ],
  creator: "ecoDigital",
  publisher: "ecoDigital",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: "ecoDigital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "ecoDigital — Jasa Pembuatan Website & Aplikasi Custom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/images/logo/logo-transparent.png"],
    creator: "@ecodigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full bg-background text-foreground selection:bg-emerald-500/30 selection:text-emerald-300">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
