"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type LoginFormValues = {
  email: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => Promise<void>;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        {...register("password", {
          required: "Kata sandi wajib diisi",
          minLength: { value: 8, message: "Minimal 8 karakter" },
        })}
      />
      <Button type="submit" isLoading={isSubmitting} className="mt-2 w-full">
        Masuk
      </Button>
    </form>
  );
}

