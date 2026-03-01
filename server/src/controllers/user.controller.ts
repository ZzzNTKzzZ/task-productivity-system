import { prisma } from "../lib/prisma.js";
import { UserService } from "../services/user.service.js";
import type { Response, Request } from "express";

export class UserController {
  // GET: /api/user/:id
  static async getUserById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const user = await UserService.getUserById(id);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // GET: /api/user/profile
  static async getCurrentUser(req: Request, res: Response) {
    try {
      const id = req.user?.userId;
      
      if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const user = await UserService.getUserById(id);

      res.status(200).json(user);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  // PATCH: /api/user/editprofile
  static async editCurrentUser(req: Request, res: Response) {
    try {
     const id = req.user?.userId
     const user = await UserService.updateUser(id!, req.body)

     return res.status(200).json(user)
    } catch (error: any) {
      return res.status(404).json({ message: error.message})
    }
  }

  // PATCH: /api/user/updatepassword
  static async updatePassWord(req: Request, res: Response) {
    try {
      const id = req.user?.userId
      const user = await UserService.updatePassword(id!, req.body)

      return res.status(200).json(user)
    } catch (error: any) {
      return res.status(404).json({ message: error.message})
    }
  }
}
