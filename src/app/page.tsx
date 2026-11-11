import React from "react";
import {
  NavbarSection,
  HeroSection,
  TechStackMarquee,
  ServicesSection,
  PortfolioSection,
  FeaturesSection,
  WorkflowSection,
  PricingSection,
  CalculatorSection,
  FaqSection,
  ConsultationFormSection,
} from "@/components/sections";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#060A14] text-white selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 1. Sticky Navigation Bar */}
      <NavbarSection />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Tech Stack Infinite Marquee */}
      <TechStackMarquee />

      {/* 4. Layanan (Apa yang Bisa Dibantu?) */}
      <ServicesSection />

      {/* 5. Showcase Portofolio (Bukti Karya Nyata) */}
      <PortfolioSection />

      {/* 6. Keunggulan (Standar Kerja ecoDigital) */}
      <FeaturesSection />

      {/* 7. Alur Pengerjaan (Cara Kerja Anti-Ghosting) */}
      <WorkflowSection />

      {/* 8. Paket Harga (Harga Terbuka & Transparan) */}
      <PricingSection />

      {/* 9. Simulasi & Hitung Estimasi Biaya */}
      <CalculatorSection />

      {/* 10. Tanya Jawab Santai (FAQ) */}
      <FaqSection />

      {/* 11. Formulir Konsultasi Cepat & Footer */}
      <ConsultationFormSection />

      {/* Floating Persistent WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
