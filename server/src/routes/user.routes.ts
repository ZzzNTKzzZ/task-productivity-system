import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get("/profile", UserController.getCurrentUser)
userRouter.patch("/editprofile", UserController.editCurrentUser)
userRouter.get("/:id" ,UserController.getUserById)

export default userRouter