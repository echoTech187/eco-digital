import React from "react";
import { FAQ_ITEMS } from "@/data/landing-data";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://ecodigitalindo.com/#organization",
    name: "ecoDigital",
    alternateName: [
      "ecodigitalindo",
      "ecodigitalindo.com",
      "Eco Digital",
      "Eco Digital Indonesia",
      "ecoDigital Indonesia",
      "ecoDigital Custom Web & Ecosystem",
    ],
    url: "https://ecodigitalindo.com",
    logo: "https://ecodigitalindo.com/icon-512x512.png",
    image: "https://ecodigitalindo.com/icon-512x512.png",
    description:
      "ecoDigital (ecodigitalindo.com / Eco Digital Indonesia) — Jasa pembuatan Aplikasi Custom, Jasa API & Backend, dan Web Instansi & Bisnis profesional langsung diskusi dengan lead developer tanpa perantara sales. Arsitektur bersih, transparan, dan serah terima tuntas bergaransi.",
    telephone: "+6287875856918",
    priceRange: "Rp 150.000 - Rp 3.500.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Bank Transfer, QRIS, E-Wallet",
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bandung" },
      { "@type": "City", name: "Surabaya" },
      { "@type": "City", name: "Yogyakarta" },
      { "@type": "City", name: "Semarang" },
      { "@type": "City", name: "Medan" },
    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development (Flutter, React Native)",
      "RESTful API & Microservices",
      "Laravel Framework",
      "Next.js App Router",
      "Clean Architecture & Modular Code",
      "Database Design & Query Optimization",
      "Payment Gateway Integration (Midtrans, Xendit)",
      "Sistem Informasi Manajemen Instansi",
      "Dashboard Analitik & Monitoring",
    ],
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
            name: "Aplikasi Custom (Web & Mobile)",
            description:
              "Pembuatan aplikasi web & mobile custom dengan clean architecture, modularitas tinggi, dan dokumentasi lengkap.",
          },
          price: "1499000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jasa API & Backend Architecture",
            description:
              "Pembuatan REST API clean architecture, database design, query optimization, dan integrasi payment gateway / WhatsApp API.",
          },
          price: "899000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Instansi & Bisnis (Siap Online)",
            description:
              "Website profil resmi instansi, sistem informasi sekolah, profil perusahaan, dan kasir POS inventori siap online.",
          },
          price: "499000",
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
    alternateName: ["ecodigitalindo", "Eco Digital"],
    url: "https://ecodigitalindo.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ecodigitalindo.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://ecodigitalindo.com",
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

