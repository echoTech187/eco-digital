import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import logoMarkImg from "../../../public/images/logo/logo-mark.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060A14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src={logoMarkImg}
            alt="EcoDigital"
            width={80}
            height={94}
            unoptimized
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              EcoDigital
            </span>
            <span className="text-[9px] font-semibold tracking-wider text-emerald-400 -mt-0.5">
              Software & IT Partner
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/#layanan"
            className="text-xs font-semibold text-white/70 transition-colors hover:text-white"
          >
            Layanan
          </Link>
          <Link
            href="/#portofolio"
            className="text-xs font-semibold text-white/70 transition-colors hover:text-white"
          >
            Portofolio
          </Link>
          <a
            href="https://wa.me/6287875856918?text=Halo%20EcoDigital%2C%20saya%20ingin%20konsultasi%20sistem%20website%20%2F%20aplikasi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow transition-all hover:scale-105 bg-gradient-to-r from-emerald-500 to-teal-500"
          >
            <HugeiconsIcon icon={WhatsappIcon} size={15} />
            <span>Konsultasi Gratis</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
