import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.get("/profile", authMiddleware, UserController.getCurrentUser)
userRouter.patch("/editprofile", authMiddleware, UserController.editCurrentUser)
userRouter.get("/:id" ,authMiddleware ,UserController.getUserById)

export default userRouter