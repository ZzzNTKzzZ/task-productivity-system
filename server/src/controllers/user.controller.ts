import { UserService } from "../services/user.service.js";
import type { Response, Request } from "express";

export class UserController {
  // GET: /api/user/:id
  static async getUserById(req: Request, res: Response) {
    try {
    
        console.log(req.headers.authorization)
      const id = req.params.id;

      if (typeof id !== "string") {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const user = await UserService.User(id);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
