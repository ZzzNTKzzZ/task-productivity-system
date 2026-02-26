import type { Express } from "express";
import authRouter from "./auth.routes.js";

export default function routes(app: Express) {
    app.use("/api/auth", authRouter);
}
