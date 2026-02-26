import { prisma } from "../lib/prisma.js";

export class UserService {
  // GET: /api/user/:id
  static async User(id: string) {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) throw new Error("User not exits");

    return user;
  }
}
