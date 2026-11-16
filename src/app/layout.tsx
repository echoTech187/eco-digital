import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme/theme-context";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@vercel/analytics/next"
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
  themeColor: "#F8FAFC",
  colorScheme: "light dark",
};

const SITE_URL = "https://ecodigitalindo.com";
const SITE_TITLE = "Eco Digital — Jasa Pembuatan Website & Aplikasi Custom | Direct Developer";
const SITE_DESC =
  "Eco Digital (ecodigitalindo) — Jasa pembuatan Aplikasi Custom, Jasa API & Backend, dan Web Instansi & Bisnis profesional. Diskusi langsung bersama lead developer tanpa perantara sales. Arsitektur bersih, transparan, dan serah terima tuntas bergaransi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Eco Digital (ecodigitalindo.com)",
  },
  description: SITE_DESC,
  applicationName: "Eco Digital",
  authors: [{ name: "Eco Digital", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "ecoDigital",
    "eco digital",
    "eco digitalindo",
    "eco",
    "digital",
    "indo",
    "ecodigital",
    "ecodigitalindo",
    "ecodigitalindo.com",
    "eco digital indonesia",
    "ecodigital indonesia",
    "eco digitalindo",
    "ecodigital web",
    "mas eko digital",
    "jasa pembuatan website",
    "jasa bikin web",
    "jasa pembuatan aplikasi",
    "jasa aplikasi custom",
    "jasa pembuatan aplikasi web",
    "jasa pembuatan aplikasi mobile",
    "jasa bikin aplikasi android",
    "jasa api dan backend",
    "jasa pembuatan rest api",
    "jasa backend architecture",
    "jasa database mysql postgresql",
    "jasa web instansi dan bisnis",
    "jasa aplikasi custom web dan mobile",
    "jasa sistem informasi instansi",
    "jasa website pemerintah pemda",
    "jasa sistem informasi sekolah",
    "jasa web profil perusahaan company profile",
    "jasa website umkm profesional",
    "jasa arsitektur software",
    "jasa coding direct developer",
    "jasa programmer fullstack",
    "jasa pembuatan web jakarta",
    "jasa pembuatan website surabaya",
    "jasa pembuatan website tangerang",
    "jasa pembuatan website bandung",
    "jasa software house indonesia",
    "jasa konsultasi it indonesia",
    "jasa integrasi payment gateway midtrans xendit",
    "jasa integrasi whatsapp api gateway",
    "jasa perbaikan error koding bug fixing",
    "jasa laravel nextjs flutter",
  ],
  creator: "Eco Digital Indonesia",
  publisher: "Eco Digital Indonesia",
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
    siteName: "Eco Digital Indonesia",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Eco Digital — Jasa Pembuatan Website & Aplikasi Custom",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512x512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('eco_theme');
                  var theme = stored === 'dark' ? 'dark' : 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-slate-50 dark:bg-[#060A14] text-slate-900 dark:text-white transition-colors duration-200 selection:bg-emerald-500/30 selection:text-emerald-400">
        <Analytics />
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
