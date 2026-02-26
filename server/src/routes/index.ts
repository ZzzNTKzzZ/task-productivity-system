import type { Express } from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";

export default function routes(app: Express) {
    app.use("/api/auth", authRouter);
    app.use("/api/user", userRouter)
}
