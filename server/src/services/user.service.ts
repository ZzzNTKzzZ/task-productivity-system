import bcrypt from "bcrypt"
import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma.js";

export class UserService {
  static async getUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) throw new Error("User not exits");

    return user;
  }

  static async updateUser(
    id: string,
    updatePayload: Prisma.UserUncheckedUpdateInput,
  ) {
    try {
      const update = await prisma.user.update({
        where: { id: id },
        data: {
          ...updatePayload,
        },
      });
      return update;
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw new Error(`The user with ID ${id} does not exist.`);
        }
      }
      throw error;
    }
  }

  static async updatePassword(id: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await prisma.user.update({
        where: {id: id},
        data: {
          password: hashedPassword
        }
      })

      return user
    } catch (error: any) {
      return error
    }
  }
}
