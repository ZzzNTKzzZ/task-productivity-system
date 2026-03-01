import type { Express } from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import adminRouter from "./admin.routes.js";
import { roleMiddleware } from "../middleware/role.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

export default function routes(app: Express) {
    app.use("/api/auth", authRouter);
    app.use("/api/user", authMiddleware,userRouter)
    app.use("/api/admin", authMiddleware ,roleMiddleware("ADMIN"), adminRouter)    
}
