"use client";

import React from "react";
import { ProjectItem } from "@/data/landing-data";

export function ProjectScreenPreview({ project }: { project: ProjectItem }) {
  switch (project.id) {
    case "simpelantas":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="flex items-center gap-1.5 font-bold text-white tracking-wider text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
              RADAR SATLANTAS POLRES
            </span>
            <span className="rounded bg-blue-500/20 px-1.5 py-0.2 text-[8px] font-mono text-blue-300">
              GPS Active
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px]">
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Pos Karanglo Unit 01</span>
              <span className="text-emerald-400 font-semibold">● Patroli</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Laporan Tilang #048</span>
              <span className="text-cyan-300 font-semibold">● FCM Sync</span>
            </div>
          </div>
        </div>
      );

    case "siapel":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="flex items-center gap-1.5 font-bold text-white text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              VALIDASI GEOFENCING GPS
            </span>
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[8px] font-mono text-emerald-300">
              Radius: 18m (Valid)
            </span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[8px] font-mono">
            <div>
              <div className="text-white font-semibold">Selfie AI Face-Match 98%</div>
              <div className="text-white/60">07:54 WIB • Tepat Waktu</div>
            </div>
            <span className="text-emerald-400 font-bold border border-emerald-400/40 px-1.5 py-0.5 rounded bg-emerald-950/40">
              ✓ Hadir
            </span>
          </div>
        </div>
      );

    case "eloker":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">KANBAN PIPELINE ATS</span>
            <span className="rounded bg-purple-500/20 px-1.5 py-0.2 text-[8px] font-mono text-purple-300">
              34 Pelamar
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[8px] font-mono text-center">
            <div className="rounded bg-white/5 p-1">
              <span className="text-white/50 block text-[7px]">Applied</span>
              <span className="font-bold text-white">24</span>
            </div>
            <div className="rounded bg-purple-950/50 border border-purple-400/30 p-1">
              <span className="text-purple-300 block text-[7px]">Interview</span>
              <span className="font-bold text-white">8</span>
            </div>
            <div className="rounded bg-emerald-950/50 border border-emerald-400/30 p-1">
              <span className="text-emerald-300 block text-[7px]">Offered</span>
              <span className="font-bold text-white">2</span>
            </div>
          </div>
        </div>
      );

    case "projex":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">SPRINT VELOCITY #14</span>
            <span className="text-[8px] font-mono text-rose-300">85% Selesai</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
              <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-rose-500 to-amber-400" />
            </div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-white/70">
              <span>Backlog: 42</span>
              <span>In Progress: 6</span>
              <span className="text-emerald-400 font-semibold">Done: 36</span>
            </div>
          </div>
        </div>
      );

    case "smk":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">PORTAL NILAI &amp; PPDB LMS</span>
            <span className="rounded bg-cyan-500/20 px-1.5 py-0.2 text-[8px] font-mono text-cyan-300">
              Kurikulum Merdeka
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px]">
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Pemrograman Web (XII RPL)</span>
              <span className="font-bold text-emerald-400">94 (A)</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/90">
              <span>Pendaftar PPDB Online</span>
              <span className="font-bold text-cyan-300">142 Siswa</span>
            </div>
          </div>
        </div>
      );

    case "simopmas":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">PELAYANAN SURAT WARGA</span>
            <span className="rounded bg-amber-500/20 px-1.5 py-0.2 text-[8px] font-mono text-amber-300">
              QR Signature
            </span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[8px] font-mono">
            <div>
              <div className="text-white font-semibold">SKU #2026/04/019</div>
              <div className="text-white/60">M. Ridwan (351608...)</div>
            </div>
            <span className="text-emerald-400 font-bold border border-emerald-400/40 px-1.5 py-0.5 rounded bg-emerald-950/40">
              ✓ Disetujui Kades
            </span>
          </div>
        </div>
      );

    case "evaluasi-kinerja":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">MATRIKS EVALUASI KINERJA</span>
            <span className="rounded bg-teal-500/20 px-1.5 py-0.2 text-[8px] font-mono text-teal-300">
              Audit Status: Verified
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px]">
            <div className="flex items-center justify-between rounded bg-white/5 px-2 py-0.5 text-white/80">
              <span>Indikator: KPI-1(40%) KPI-2(35%)</span>
              <span className="text-white/50">Target 100%</span>
            </div>
            <div className="flex items-center justify-between rounded bg-emerald-950/40 border border-emerald-400/30 px-2 py-0.5 text-emerald-300">
              <span>Peringkat #1: Divisi Teknis</span>
              <span className="font-bold">Skor: 94.2/100</span>
            </div>
          </div>
        </div>
      );

    case "pos-umkm-wa":
      return (
        <div className="relative z-10 rounded-xl border border-white/15 bg-black/60 p-2 backdrop-blur-md text-[10px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
            <span className="font-bold text-white text-[9px]">KASIR RETAIL MULTI-CABANG</span>
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[8px] font-mono text-emerald-300">
              QRIS BCA Lunas
            </span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[8px] font-mono">
            <div>
              <div className="text-white font-semibold">Total: Rp 148.500 (3 item)</div>
              <div className="text-white/60">Order #8921 • Meja 04</div>
            </div>
            <span className="text-emerald-400 font-bold border border-emerald-400/40 px-1.5 py-0.5 rounded bg-emerald-950/40">
              ✓ Struk WA Sent
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

