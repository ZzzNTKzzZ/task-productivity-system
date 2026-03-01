export interface ProfileUser {
    username: string,
    email: string,
    password: string,
    role: string
}

export enum UserRole {
    Admin = "ADMIN",
    User = "USER"
}

export interface CreateUserInputRegister {
  email: string;
  username: string;
  password: string;
}

export interface UserResponse {
  id: string;
  email: string;
  username: string;
  role: "USER" | "ADMIN";
  createdAt: Date;
}