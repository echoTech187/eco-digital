import React from "react";
import { FAQ_ITEMS } from "@/data/landing-data";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://eco.co-id.id/#organization",
    name: "ecoDigital",
    alternateName: "ecoDigital Custom Web & Ecosystem",
    url: "https://eco.co-id.id",
    logo: "https://eco.co-id.id/images/logo/logo-transparent.png",
    image: "https://eco.co-id.id/images/logo/logo-transparent.png",
    description:
      "Jasa pembuatan website dan aplikasi custom terpercaya langsung diskusi dengan developer tanpa perantara. Melayani tugas akhir/skripsi, sistem informasi instansi, web sekolah, aplikasi UMKM, dan perbaikan bug kodingan.",
    telephone: "+6287875856918",
    priceRange: "Rp 150.000 - Rp 3.500.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Bank Transfer, QRIS, E-Wallet",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Indonesia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      "https://wa.me/6287875856918",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan ecoDigital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klinik Koding: Fix Error & Tambah Fitur",
            description:
              "Perbaikan bug/error PHP, Laravel, JS, Flutter, tambah modul baru, dan redesign tampilan UI.",
          },
          price: "150000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Partner Sistem Tugas Akhir, SPK & Riset",
            description:
              "Pembuatan website dan aplikasi mobile penelitian/skripsi lengkap dengan video bedah kode dan bimbingan 1-on-1.",
          },
          price: "850000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aplikasi Sistem Sekolah, Instansi & Bisnis UMKM",
            description:
              "Website profil usaha, sistem informasi sekolah, katalog produk, kasir/inventori siap online.",
          },
          price: "1500000",
          priceCurrency: "IDR",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ecoDigital",
    url: "https://eco.co-id.id",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://eco.co-id.id/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
