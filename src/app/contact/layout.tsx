import type { Metadata } from "next";

const BASE_URL = "https://ecodigitalindo.com";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Langsung Lead Developer | ecoDigital (ecodigitalindo.com)",
  description:
    "Hubungi ecoDigital (ecodigitalindo.com) untuk konsultasi gratis rancang bangun Aplikasi Custom, Jasa API & Backend, atau Web Instansi & Bisnis langsung bersama lead developer tanpa perantara sales.",
  keywords: [
    "kontak ecodigital",
    "ecodigitalindo kontak",
    "eco digital indonesia kontak",
    "konsultasi jasa web",
    "hubungi developer website",
    "jasa pembuatan web whatsapp",
    "konsultasi aplikasi custom",
    "nomor wa ecodigital",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Kontak & Konsultasi Langsung Lead Developer | ecoDigital",
    description:
      "Konsultasi teknis gratis kebutuhan Aplikasi Custom, Jasa API & Backend, atau Web Instansi bersama lead developer ecoDigital.",
    url: `${BASE_URL}/contact`,
    siteName: "Eco Digital Indonesia",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Kontak ecoDigital",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
