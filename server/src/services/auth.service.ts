import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { prisma } from "../lib/prisma.js";
import type { CreateUserInputRegister } from "../types/user.js";


export class AuthService {
  static async register(data: CreateUserInputRegister) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const username = (data?.username ?? data?.email?.split("@")[0]) || "User";
    const user = await prisma.user.create({
      data: {
        username: username,
        email: data.email,
        password: hashedPassword,
      },
    });
    
    return user
  }

  static async login(data: CreateUserInputRegister) {
    const user = await prisma.user.findUnique({
        where: { email : data.email}
    })

    if(!user) throw new Error("Invalid credentials")

    const isPasswordValid = await bcrypt.compare(
        data.password,
        user.password
    )

    if(!isPasswordValid) throw new Error("Invalid credentials")

    const token = jwt.sign(
        { userId: user.id, role: user.role},
        process.env.JWT_SECRET as string,
        { expiresIn: "1d"}
    )


    return { user, token }
  }

}
