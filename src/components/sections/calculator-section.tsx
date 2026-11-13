"use client";

import React, { useState, useMemo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  CALCULATOR_BASE_OPTIONS,
  CALCULATOR_ADDON_OPTIONS,
  WA_NUMBER,
} from "@/data/landing-data";

interface CalculatorSectionProps {
  isStandalone?: boolean;
}

export function CalculatorSection({ isStandalone = false }: CalculatorSectionProps) {
  const [calcProjectType, setCalcProjectType] = useState<string>("skripsi");
  const [calcAddons, setCalcAddons] = useState<string[]>([
    "bedah_kode",
    "spk_algo",
  ]);

  // Cost Calculator Calculations
  const calculatedResult = useMemo(() => {
    const base =
      CALCULATOR_BASE_OPTIONS[calcProjectType] || CALCULATOR_BASE_OPTIONS.skripsi;
    let total = base.price;
    const selectedAddonLabels: string[] = [];

    calcAddons.forEach((id) => {
      if (CALCULATOR_ADDON_OPTIONS[id]) {
        total += CALCULATOR_ADDON_OPTIONS[id].price;
        selectedAddonLabels.push(CALCULATOR_ADDON_OPTIONS[id].label);
      }
    });

    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(total);

    const formattedBasePrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(base.price);

    const waText = `Halo Mas (ecoDigital), saya baru coba hitung simulasi biaya di website:
- Jenis Proyek: ${base.label}
- Fitur Tambahan: ${selectedAddonLabels.length > 0 ? selectedAddonLabels.join(", ") : "Tidak ada"}
- Estimasi Kasar di Web: ${formattedPrice}
Boleh diskusi lebih lanjut untuk detail alur dan pengerjaannya?`;

    const selectedAddonDetails = calcAddons
      .filter((id) => CALCULATOR_ADDON_OPTIONS[id])
      .map((id) => ({
        id,
        label: CALCULATOR_ADDON_OPTIONS[id].label,
        price: CALCULATOR_ADDON_OPTIONS[id].priceFormatted,
      }));

    return {
      label: base.label,
      baseName: base.name,
      basePrice: formattedBasePrice,
      totalPrice: formattedPrice,
      days: base.days,
      waUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`,
      addonLabels: selectedAddonLabels,
      addonDetails: selectedAddonDetails,
    };
  }, [calcProjectType, calcAddons]);

  return (
    <div
      id="kalkulator-biaya"
      className={
        isStandalone
          ? "relative z-20 w-full scroll-mt-0"
          : "relative z-20 w-full bg-[#060A14] px-4 sm:px-8 lg:px-14 py-12 sm:py-16 scroll-mt-0 border-t border-white/10"
      }
    >
      <div className={isStandalone ? "w-full" : "mx-auto max-w-4xl"}>
        {!isStandalone && (
          <AnimateOnScroll preset="fade-up" className="mb-8 sm:mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">
              SIMULASI &amp; HITUNG MANDIRI
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              Masih Ragu Biayanya? Hitung Sendiri Estimasi Kasarnya di Sini
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-white/60">
              Klik jenis sistem dan centang fitur tambahan yang kamu butuhkan, lalu kirim hasilnya ke WA saya untuk negosiasi santai.
            </p>
          </AnimateOnScroll>
        )}

        <div className="rounded-2xl sm:rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950/20 via-white/[0.04] to-blue-950/20 p-4 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl">
          {/* Step 1: Pilih Jenis Sistem */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 block mb-3">
              1. Pilih Kategori Sistem Anda:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {Object.entries(CALCULATOR_BASE_OPTIONS).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setCalcProjectType(key)}
                  className={`text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all ${
                    calcProjectType === key
                      ? "border-emerald-400 bg-emerald-500/20 shadow-md shadow-emerald-500/20 scale-[1.01]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{item.name}</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">{item.base}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-white/60">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Pilih Fitur Tambahan */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10">
            <label className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 block mb-3">
              2. Pilih Fitur &amp; Fasilitas Tambahan (Opsional):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {Object.entries(CALCULATOR_ADDON_OPTIONS).map(([key, addon]) => {
                const isChecked = calcAddons.includes(key);
                return (
                  <button
                    key={key}
                    onClick={() => {
                      if (isChecked) {
                        setCalcAddons(calcAddons.filter((a) => a !== key));
                      } else {
                        setCalcAddons([...calcAddons, key]);
                      }
                    }}
                    className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left transition-all ${
                      isChecked
                        ? "border-cyan-400/60 bg-cyan-950/30 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${
                          isChecked
                            ? "border-cyan-400 bg-cyan-400 text-black font-bold"
                            : "border-white/30"
                        }`}
                      >
                        {isChecked && (
                          <HugeiconsIcon
                            icon={CheckmarkCircle01Icon}
                            size={12}
                            className="text-black"
                          />
                        )}
                      </span>
                      <span className="text-xs font-medium">{addon.label}</span>
                    </div>
                    <span className="text-[11px] font-bold text-cyan-300 ml-2 shrink-0">
                      {addon.priceFormatted}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ringkasan Instan (Instant Interactive Breakdown) */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                  Ringkasan Instan (Real-Time Breakdown)
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                Terupdate Otomatis
              </span>
            </div>

            <div className="mt-3 space-y-2 text-xs">
              {/* Base Item */}
              <div className="flex items-center justify-between text-white/80">
                <span className="flex items-center gap-1.5 font-medium">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} className="text-emerald-400 shrink-0" />
                  <span>Paket Dasar: {calculatedResult.baseName}</span>
                </span>
                <span className="font-semibold text-white/90">{calculatedResult.basePrice}</span>
              </div>

              {/* Addons List */}
              {calculatedResult.addonDetails.length > 0 ? (
                calculatedResult.addonDetails.map((addon) => (
                  <div key={addon.id} className="flex items-center justify-between text-white/70 pl-5">
                    <span className="truncate pr-2">• {addon.label}</span>
                    <span className="font-semibold text-cyan-300 shrink-0">{addon.price}</span>
                  </div>
                ))
              ) : (
                <div className="text-[11px] text-white/40 italic pl-5">
                  (Belum ada fitur tambahan yang dipilih)
                </div>
              )}
            </div>

            {/* Quick Trust Badges */}
            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 gap-y-1.5 text-[11px] text-emerald-300/80">
              <span className="inline-flex items-center gap-1">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={12} className="text-emerald-400" />
                100% Source Code &amp; Database Milik Anda
              </span>
              <span className="inline-flex items-center gap-1">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={12} className="text-emerald-400" />
                Garansi Revisi Sampai ACC
              </span>
              <span className="inline-flex items-center gap-1">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={12} className="text-emerald-400" />
                Bisa Dicicil Sesuai Progres
              </span>
            </div>
          </div>

          {/* Step 3: Hasil Kalkulasi & Action CTA */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6 bg-black/40 -mx-4 sm:-mx-8 lg:-mx-10 -mb-4 sm:-mb-8 lg:-mb-10 p-5 sm:p-8 rounded-b-2xl sm:rounded-b-3xl">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-white/50 block">
                  Estimasi Biaya Transparan:
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-400/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                  ⚡ Live Total
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-400 transition-all duration-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  {calculatedResult.totalPrice}
                </span>
                <span className="text-xs text-white/60">
                  • Estimasi: {calculatedResult.days}
                </span>
              </div>
              <p className="text-[11px] text-white/50 mt-1">
                *Garansi revisi sampai ACC &amp; full source code tanpa enkripsi.
              </p>
            </div>

            <a
              href={calculatedResult.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 sm:px-6 py-3.5 sm:py-4 text-xs font-bold text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 text-center"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={18} />
              <span>Kirim Hasil Simulasi ke WA →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

