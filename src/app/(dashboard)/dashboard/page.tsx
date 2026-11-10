import { StaggerContainer, StaggerItem, AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata = { title: "Dashboard — Eco Digital" };

const stats = [
  { label: "Total Pengguna", value: "—" },
  { label: "Transaksi Hari Ini", value: "—" },
  { label: "Pendapatan", value: "—" },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <AnimateOnScroll preset="fade-right">
        <h1 className="text-3xl font-black text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-white/50">
          Selamat datang di portal kontrol Eco Digital
        </p>
      </AnimateOnScroll>

      <StaggerContainer
        staggerDelay={0.12}
        delay={0.1}
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {stats.map((stat) => (
          <StaggerItem key={stat.label} preset="fade-up">
            <div
              className="rounded-3xl p-6 backdrop-blur-xl transition-all"
              style={{
                background: "rgba(15, 26, 52, 0.5)",
                border: "1px solid rgba(20, 180, 120, 0.2)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-black text-[#14B478]">
                {stat.value}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
