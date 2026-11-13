import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#060A14] px-6 text-slate-900 dark:text-white transition-colors">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[120px]" />

      {/* Center 404 Glass Card */}
      <div className="relative z-10 max-w-md rounded-[32px] border border-slate-200 dark:border-white/15 bg-white dark:bg-white/10 p-10 text-center shadow-xl dark:shadow-2xl backdrop-blur-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-[#10B981]">
          Error 404
        </span>
        <h1 className="mt-3 text-6xl font-black italic tracking-tighter text-slate-900 dark:text-white">
          404
        </h1>
        <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-white/60">
          Halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau alamat URL yang dimasukkan keliru.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-full bg-emerald-600 dark:bg-[#10B981] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-950/20 dark:shadow-emerald-950/50 transition-all hover:scale-105 hover:bg-emerald-500 dark:hover:bg-[#059669]"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

