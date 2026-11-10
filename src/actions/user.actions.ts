"use server";

import { CreateUserDto } from "@/lib/entities/user.entity";
import { CreateUserUseCase } from "@/lib/use-cases/user/create-user.use-case";
import { GetUserUseCase } from "@/lib/use-cases/user/get-user.use-case";
import { UserRepositoryImpl } from "@/infrastructure/repositories/user.repository.impl";

const userRepository = new UserRepositoryImpl();

export async function createUserAction(data: CreateUserDto) {
  try {
    const useCase = new CreateUserUseCase(userRepository);
    const user = await useCase.execute(data);
    return { success: true, data: user };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getUserAction(id: string) {
  try {
    const useCase = new GetUserUseCase(userRepository);
    const user = await useCase.execute(id);
    return { success: true, data: user };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

