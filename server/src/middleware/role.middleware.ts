import type { Request, Response, NextFunction } from "express";

export const roleMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    if (req.user.role !== requiredRole)
      return res.status(403).json({ message: "Forbidden" });

    next();
  };
};
