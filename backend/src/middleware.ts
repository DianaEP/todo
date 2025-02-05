import { Request, Response, NextFunction, Router } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";


export interface AuthRequest extends Request {
    user?: any; 
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): any => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];
    
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; 
        next(); 
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

const protectedRoutes = Router();

// Example protected route
protectedRoutes.get("/", authenticateToken, (req: AuthRequest, res: Response): any => {
    res.json({ message: "Protected data", user: req.user });
});

export default protectedRoutes;