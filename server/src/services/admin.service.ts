import { prisma } from "../lib/prisma.js";
import type { UserRole } from "../types/user.js";

export class AdminService {
  static async getAllUser() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error: any) {
      throw error;
    }
  }

  static async deleteUser(id: string) {
    try {
        const user = await prisma.user.delete({
            where: {id: id}
        })
        return user
    } catch (error: any) {
        throw error
    }
  }

  static async updateUserRole(id: string, role: UserRole) {
    try {
        const user = await prisma.user.update({
            where: {id : id},
            data: {
                role
            }
        })
        return user
    } catch (error: any) {
        return error
    }
  }

}
