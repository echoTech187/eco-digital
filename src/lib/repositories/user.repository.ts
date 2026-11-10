import { UserEntity, CreateUserDto, UpdateUserDto } from "@/lib/entities/user.entity";

/**
 * Repository interface (abstraction) for User.
 * Implementations are in src/infrastructure/repositories/
 */
export interface IUserRepository {
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[]>;
  create(data: CreateUserDto): Promise<UserEntity>;
  update(id: string, data: UpdateUserDto): Promise<UserEntity>;
  delete(id: string): Promise<void>;
}

