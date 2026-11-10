// Domain Entity: User
export interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserDto = Omit<UserEntity, "id" | "createdAt" | "updatedAt">;
export type UpdateUserDto = Partial<CreateUserDto>;

