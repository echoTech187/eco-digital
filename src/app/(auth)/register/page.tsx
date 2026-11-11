"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "@/components/forms/register-form";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export default function RegisterPage() {
  useEffect(() => {
    document.title = "Daftar — Eco Digital";
  }, []);

  async function handleRegister(data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    console.log("Register:", data.email);
  }

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12"
      style={{
        background:
          "linear-gradient(135deg, #0A1020 0%, #0D162C 50%, #0A1224 100%)",
      }}
    >
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#14B478] opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#0D8A5E] opacity-10 blur-3xl" />

      <div className="relative z-10 w-full max-w-sm">
        <AnimateOnScroll preset="zoom-in" duration={0.4}>
          <div className="mb-8 flex flex-col items-center gap-3">
            <Link href="/">
              <Image
                src="/images/logo/logo-transparent.png"
                alt="Eco Digital"
                width={130}
                height={39}
                priority
              />
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">Buat Akun Baru</h1>
              <p className="mt-1 text-sm text-white/50">
                Bergabunglah dengan ekosistem Eco Digital
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll preset="fade-up" delay={0.1}>
          <div
            className="rounded-3xl p-6 shadow-2xl backdrop-blur-xl"
            style={{
              background: "rgba(15, 26, 52, 0.5)",
              border: "1px solid rgba(20, 180, 120, 0.2)",
            }}
          >
            <RegisterForm onSubmit={handleRegister} />
          </div>
        </AnimateOnScroll>

        <p className="mt-6 text-center text-sm text-white/40">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="font-medium text-[#14B478] hover:text-[#19D48D] transition-colors"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </main>
  );
}
