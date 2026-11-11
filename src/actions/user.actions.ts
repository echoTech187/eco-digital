import { CreateUserDto } from "@/lib/entities/user.entity";
import { CreateUserUseCase } from "@/lib/use-cases/user/create-user.use-case";
import { GetUserUseCase } from "@/lib/use-cases/user/get-user.use-case";
import { UserRepositoryImpl } from "@/infrastructure/repositories/user.repository.impl";

const userRepository = new UserRepositoryImpl();

export async function createUserAction(data: CreateUserDto) {
  try {
    if (!data || !data.email || !data.name) {
      return { success: false, message: "Data pengguna tidak lengkap" };
    }
    const useCase = new CreateUserUseCase(userRepository);
    const user = await useCase.execute(data);
    return { success: true, data: user };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Gagal membuat pengguna",
    };
  }
}

export async function getUserAction(id: string) {
  try {
    if (!id || typeof id !== "string" || id.trim().length === 0) {
      return { success: false, message: "ID pengguna tidak valid" };
    }
    const useCase = new GetUserUseCase(userRepository);
    const user = await useCase.execute(id.trim());
    return { success: true, data: user };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Pengguna tidak ditemukan",
    };
  }
}

