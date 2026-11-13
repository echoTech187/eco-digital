import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme/theme-context";
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

const SITE_URL = "https://www.ecodigitalindo.com";
const SITE_TITLE = "ecoDigital — Jasa Pembuatan Website & Aplikasi Custom | Direct Developer";
const SITE_DESC =
  "Jasa pembuatan Aplikasi Custom, Jasa API & Backend, dan Web Instansi & Bisnis profesional. Diskusi langsung bersama lead developer tanpa perantara sales. Arsitektur bersih, transparan, dan serah terima tuntas bergaransi.";

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
    "jasa aplikasi custom",
    "jasa api dan backend",
    "jasa pembuatan rest api",
    "jasa web instansi dan bisnis",
    "jasa aplikasi custom web dan mobile",
    "jasa pembuatan aplikasi",
    "jasa sistem informasi instansi",
    "jasa arsitektur software",
    "jasa perbaikan error koding",
    "jasa fix bug php laravel",
    "jasa web sekolah",
    "jasa website umkm",
    "jasa coding direct developer",
    "ecoDigital",
    "jasa sistem informasi",
    "jasa website instansi",
    "jasa web profesional",
    "software house custom web",
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('eco_theme');
                  var theme = stored === 'light' ? 'light' : 'dark';
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
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
