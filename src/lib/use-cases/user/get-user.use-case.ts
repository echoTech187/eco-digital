import { UserEntity } from "@/lib/entities/user.entity";
import { IUserRepository } from "@/lib/repositories/user.repository";

/**
 * Use Case: Get a single user by ID.
 */
export class GetUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string): Promise<UserEntity | null> {
    return this.userRepository.findById(id);
  }
}

