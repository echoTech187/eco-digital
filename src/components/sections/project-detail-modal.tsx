"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  CheckmarkCircle01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { ProjectItem, getWaUrl } from "@/data/landing-data";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#060A14] p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
          aria-label="Tutup Detail Proyek"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
            <HugeiconsIcon icon={project.mockupIcon} size={26} />
          </span>
          <div>
            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              {project.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1.5">
            Ringkasan Arsitektur &amp; Studi Kasus
          </h4>
          <p className="text-xs sm:text-sm leading-relaxed text-white/80">
            {project.fullSpecs?.overview || project.desc}
          </p>
        </div>

        {/* Case Study / Dampak Nyata */}
        {project.impact && (
          <div className="mt-3 flex items-start gap-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-3.5 text-xs text-emerald-300">
            <HugeiconsIcon
              icon={CheckmarkCircle01Icon}
              size={18}
              className="text-emerald-400 shrink-0 mt-0.5"
            />
            <div>
              <span className="font-bold text-emerald-200">Hasil &amp; Dampak Nyata: </span>
              <span className="text-white/90">{project.impact}</span>
            </div>
          </div>
        )}

        {/* Key Modules */}
        {project.fullSpecs?.keyModules && (
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Fitur &amp; Modul Utama
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              {project.fullSpecs.keyModules.map((km, i) => (
                <li key={i} className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    size={15}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />
                  <span>{km}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        {project.fullSpecs?.techStack && (
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.fullSpecs.techStack.map((ts, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90"
                >
                  {ts}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Clean Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={getWaUrl(
              `Halo Mas (ecoDigital), saya tertarik memesan sistem yang serupa dengan portofolio ${project.title} (${project.domain}). Bisakah kita diskusikan alur dan biayanya?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.01] hover:from-emerald-400 hover:to-teal-400 active:scale-98"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={16} />
            <span>Diskusikan Sistem Serupa via WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            <span>Tutup</span>
          </button>
        </div>
      </div>
    </div>
  );
}

