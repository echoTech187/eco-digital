import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import logoMarkImg from "../../../public/images/logo/logo-mark.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060A14] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={logoMarkImg}
              alt="ecoDigital"
              width={70}
              height={82}
              unoptimized
              className="h-7 w-auto object-contain"
            />
            <span className="text-sm font-bold tracking-tight text-white/90">
              ecoDigital
            </span>
          </Link>
          <div className="flex items-center gap-3 text-xs text-white/60">
            <a
              href="https://wa.me/6287875856918"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium text-emerald-400"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={15} />
              <span>WhatsApp: 0878-7585-6918</span>
            </a>
            <span>•</span>
            <span className="text-white/50">Konsultasi & Garansi Resmi</span>
          </div>
          <p className="text-xs text-white/40">
            &copy; 2026 ecoDigital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
