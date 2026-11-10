import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata = { title: "Profil Pengguna — Eco Digital" };

export default function ProfilePage() {
  return (
    <div className="p-8">
      <AnimateOnScroll preset="fade-right">
        <h1 className="text-3xl font-black text-white">Profil Pengguna</h1>
        <p className="mt-1 text-sm text-white/50">
          Kelola informasi akun dan identitas digital Anda di Eco Digital
        </p>
      </AnimateOnScroll>

      <div className="mt-8 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#10B981]/20 text-2xl font-black text-[#10B981]">
            ED
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Founder Eco Digital</h2>
            <p className="text-xs text-white/50">founder@ecodigital.id</p>
            <span className="mt-2 inline-block rounded-full bg-[#10B981]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
              Administrator
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6">
          <div>
            <span className="text-xs text-white/40">Status Keanggotaan</span>
            <p className="text-sm font-semibold text-white">Terverifikasi (Tier 1)</p>
          </div>
          <div>
            <span className="text-xs text-white/40">Zona Waktu</span>
            <p className="text-sm font-semibold text-white">Asia/Jakarta (WIB)</p>
          </div>
          <div>
            <span className="text-xs text-white/40">Bergabung Sejak</span>
            <p className="text-sm font-semibold text-white">November 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

