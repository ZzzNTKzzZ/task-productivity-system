import { Router } from "express";
import { AdminController } from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.get("/users", AdminController.users);
adminRouter.delete("/delete-user", AdminController.deleteUser);
adminRouter.patch("/update-user-role", AdminController.updateUserRole)
export default adminRouter;
