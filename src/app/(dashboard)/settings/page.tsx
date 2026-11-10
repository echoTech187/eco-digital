import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";

export const metadata = { title: "Pengaturan — EcoDigital" };

export default function SettingsPage() {
  return (
    <div className="p-8">
      <AnimateOnScroll preset="fade-right">
        <h1 className="text-3xl font-black text-white">Pengaturan</h1>
        <p className="mt-1 text-sm text-white/50">
          Konfigurasi preferensi sistem dan integrasi ekosistem Anda
        </p>
      </AnimateOnScroll>

      <div className="mt-8 max-w-2xl space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-base font-bold text-white">Preferensi Notifikasi</h2>
          <p className="mt-1 text-xs text-white/50">
            Pilih bagaimana Anda ingin menerima pembaruan sistem dan keamanan.
          </p>
          <div className="mt-4 space-y-3">
            {["Email update transaksi", "Pemberitahuan login baru", "Pembaruan fitur berkala"].map(
              (item) => (
                <label key={item} className="flex items-center gap-3 text-xs text-white/80">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded accent-[#10B981]"
                  />
                  {item}
                </label>
              )
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-base font-bold text-white">Keamanan Akun</h2>
          <p className="mt-1 text-xs text-white/50">
            Kelola otentikasi dua faktor (2FA) dan sesi aktif.
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-[#10B981]">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} size={13} />
              <span>Autentikasi 2FA Aktif</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

