import React from "react";
import fs from "fs";
import path from "path";
import {
  NavbarSection,
  HeroV2Section,
  ServicesSection,
  PortfolioSection,
  FeaturesSection,
  TestimonialsSection,
  WorkflowSection,
  PricingSection,
  FaqSection,
  ConsultationFormSection,
} from "@/components/sections";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function Home() {
  const videoWebm = path.join(process.cwd(), "public/videos/gani-talking.webm");
  const videoMp4 = path.join(process.cwd(), "public/videos/gani-talking.mp4");
  const videoSrc = fs.existsSync(videoWebm)
    ? "/videos/gani-talking.webm"
    : fs.existsSync(videoMp4)
    ? "/videos/gani-talking.mp4"
    : null;

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[#060A14] text-white selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 1. Sticky Navigation Bar */}
      <NavbarSection />

      {/* 2. Hero Section (Including Integrated Tech Stack) */}
      <HeroV2Section videoSrc={videoSrc} />

      {/* 3. Layanan (Apa yang Bisa Dibantu?) */}
      <ServicesSection />

      {/* 4. Portofolio (Showcase Portofolio Nyata) */}
      <PortfolioSection />

      {/* 5. Keunggulan (Standar Kerja ecoDigital) */}
      <FeaturesSection />

      {/* 6. Testimoni Klien & Mahasiswa (Sosial Proof Nyata) */}
      <TestimonialsSection />

      {/* 7. Alur Pengerjaan (Alur Pengerjaan Anti-Ghosting) */}
      <WorkflowSection />

      {/* 8. Paket Harga (Paket Harga Terbuka & Transparan + Banner Simulasi) */}
      <PricingSection />

      {/* 9. Tanya Jawab Santai (FAQ) */}
      <FaqSection />

      {/* 12. Formulir Konsultasi Cepat & Footer */}
      <ConsultationFormSection />

      {/* Floating Persistent WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
