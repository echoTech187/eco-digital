import { UserEntity, CreateUserDto } from "@/lib/entities/user.entity";
import { IUserRepository } from "@/lib/repositories/user.repository";

/**
 * Use Case: Create a new user.
 */
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: CreateUserDto): Promise<UserEntity> {
    // Business rule: check email uniqueness
    const existing = await this.userRepository.findByEmail(data.email);
    if (existing) {
      throw new Error("Email already registered");
    }

    return this.userRepository.create(data);
  }
}

