import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

const protectedRoutes = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

// Protected Route Example
protectedRoutes.get("/", async (req: Request, res: Response):Promise<any> => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: "Protected data", user: decoded });
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
});

export default protectedRoutes;