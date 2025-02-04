import express from "express";
import dotenv from "dotenv";
import { initDb } from "./db";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Initialize Database
initDb();

// Routes
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});