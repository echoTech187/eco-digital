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
    <div className="relative min-h-screen w-full overflow-x-clip bg-slate-50 dark:bg-[#060A14] text-slate-900 dark:text-white transition-colors duration-200 selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* 1. Sticky Navigation Bar */}
      <NavbarSection />

      {/* 2. Hero Section (Inova-style Sticky Pinning Stage) */}
      <div className="relative w-full lg:h-[135vh]">
        <div className="lg:sticky lg:top-0 z-10 w-full lg:h-screen lg:overflow-hidden">
          <HeroV2Section videoSrc={videoSrc} />
        </div>
      </div>

      {/* 3. Main Content Sheets (Inova-style Rising Plinth Curtain Overlap) */}
      <main className="relative z-30 w-full -mt-20 sm:-mt-24 lg:-mt-28 rounded-t-[36px] sm:rounded-t-[56px] border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#060A14] shadow-[0_-30px_70px_-20px_rgba(0,0,0,0.18)] dark:shadow-[0_-35px_80px_-25px_rgba(0,0,0,0.9)]">
        {/* 3. Layanan (Apa yang Bisa Dibantu?) */}
        <ServicesSection />

        {/* 4. Portofolio (Showcase Portofolio Nyata) */}
        <PortfolioSection />

        {/* 5. Keunggulan (Standar Kerja ecoDigital) */}
        <FeaturesSection />

        {/* 6. Testimoni Klien Instansi & Bisnis (Sosial Proof Nyata) */}
        <TestimonialsSection />

        {/* 7. Alur Pengerjaan (Alur Pengerjaan Anti-Ghosting) */}
        <WorkflowSection />

        {/* 8. Paket Harga (Paket Harga Terbuka & Transparan + Banner Simulasi) */}
        <PricingSection />

        {/* 9. Tanya Jawab Santai (FAQ) */}
        <FaqSection />

        {/* 12. Formulir Konsultasi Cepat & Footer */}
        <ConsultationFormSection />
      </main>

      {/* Floating Persistent WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
