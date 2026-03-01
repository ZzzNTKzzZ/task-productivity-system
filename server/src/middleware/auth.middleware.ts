import jwt from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"
import type { MyJwtPayload } from "../types/jwt.js"
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if(!authHeader) return res.status(401).json({ message: "No token provider"})

    const [, token] = authHeader.split(" ");
    try {
        const decoded = jwt.verify(token!, process.env.JWT_SECRET!) as MyJwtPayload
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }

}

export default authMiddleware