import type { Request, Response } from "express";
import { AdminService } from "../services/admin.service.js";
export class AdminController {
  // GET : /users
  static async users(req: Request, res: Response) {
    try {
      const users = await AdminService.getAllUser();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // DELETE : /delete-user
  static async deleteUser(req: Request, res: Response) {
    try {
      const user = await AdminService.deleteUser(req.body.id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  // PATCH : /update-user-role
  static async updateUserRole(req: Request, res: Response) {
    try {
      const id = req.user?.userId;
      const role = req.body.role;
      const user = await AdminService.updateUserRole(id!, role);

      res.status(200).json(user)
    } catch (error: any) {
      return error
    }
  }
}
