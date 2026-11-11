"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface RegisterFormProps {
  onSubmit: (data: RegisterFormValues) => Promise<void>;
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Nama Lengkap"
        type="text"
        placeholder="John Doe"
        error={errors.name?.message}
        {...register("name", { required: "Nama wajib diisi" })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="nama@contoh.com"
        error={errors.email?.message}
        {...register("email", {
          required: "Email wajib diisi",
          pattern: { value: /^\S+@\S+$/i, message: "Format email tidak valid" },
        })}
      />
      <Input
        label="Kata Sandi"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        hint="Minimal 8 karakter"
        {...register("password", {
          required: "Kata sandi wajib diisi",
          minLength: { value: 8, message: "Minimal 8 karakter" },
        })}
      />
      <Input
        label="Konfirmasi Kata Sandi"
        type="password"
        placeholder="••••••••"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Konfirmasi kata sandi wajib diisi",
          validate: (val) => val === getValues("password") || "Kata sandi tidak cocok",
        })}
      />
      <Button type="submit" isLoading={isSubmitting} className="mt-2 w-full">
        Daftar Sekarang
      </Button>
    </form>
  );
}

