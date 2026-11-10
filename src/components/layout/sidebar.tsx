import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Profil", href: "/profile" },
  { label: "Pengaturan", href: "/settings" },
];

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0A1020] text-white">
      {/* Sidebar */}
      <aside
        className="hidden w-64 shrink-0 flex-col border-r lg:flex"
        style={{
          background: "#080D1A",
          borderColor: "rgba(20, 180, 120, 0.15)",
        }}
      >
        <div
          className="flex h-16 items-center border-b px-6"
          style={{ borderColor: "rgba(20, 180, 120, 0.15)" }}
        >
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <Image
              src="/images/logo/logo-mark.png"
              alt="Eco Digital"
              width={34}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
            <span className="text-lg font-bold tracking-tight text-white">Eco Digital</span>
          </Link>
        </div>
        <nav className="flex flex-1 flex-col gap-1.5 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-white/70 transition-all hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

