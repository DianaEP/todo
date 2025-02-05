import express, { Request, Response, Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDb } from "../db";

const authRoutes = Router();
const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
};

// Signup Route
authRoutes.post("/signup", async (req: Request , res: Response):Promise<any> => {
    const { email, password } = req.body;

    if (!email || !password || password.length < 6) {
        return res.status(400).json({ message: "Invalid email or password too short" });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        const db = getDb();

        const existingUser = await db.get("SELECT * FROM users WHERE email = ?", [email]);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        await db.run("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);
        res.status(201).json({ message: "User created successfully" });
    } catch (error: Error | unknown) {
        if(error instanceof Error){
            if (error.message === 'SQLITE_CONSTRAINT') {
                return res.status(400).json({ message: "User already exists" });
            }
        }
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login Route
authRoutes.post("/login", async (req: Request, res: Response):Promise<any> => {
    const { email, password } = req.body;
    const db = getDb();
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

export default authRoutes;