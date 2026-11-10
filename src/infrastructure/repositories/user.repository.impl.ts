import { IUserRepository } from "@/lib/repositories/user.repository";
import { UserEntity, CreateUserDto, UpdateUserDto } from "@/lib/entities/user.entity";

/**
 * Concrete implementation of IUserRepository.
 * Replace the in-memory store with your actual DB client (Prisma, Drizzle, etc.)
 */
export class UserRepositoryImpl implements IUserRepository {
  // TODO: Replace with actual database client
  private db: UserEntity[] = [];

  async findById(id: string): Promise<UserEntity | null> {
    return this.db.find((u) => u.id === id) ?? null;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.db.find((u) => u.email === email) ?? null;
  }

  async findAll(): Promise<UserEntity[]> {
    return this.db;
  }

  async create(data: CreateUserDto): Promise<UserEntity> {
    const newUser: UserEntity = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.db.push(newUser);
    return newUser;
  }

  async update(id: string, data: UpdateUserDto): Promise<UserEntity> {
    const index = this.db.findIndex((u) => u.id === id);
    if (index === -1) throw new Error("User not found");
    this.db[index] = { ...this.db[index], ...data, updatedAt: new Date() };
    return this.db[index];
  }

  async delete(id: string): Promise<void> {
    this.db = this.db.filter((u) => u.id !== id);
  }
}

