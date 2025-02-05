import express from "express";
import dotenv from "dotenv";
import { initDb } from "./db";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";
import todoRoutes from "./routes/todosRoutes";

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Initialize Database
initDb()
  .then(() => {
    console.log("Database initialized and tables created!");
  })
  .catch((err) => {
    console.error("Error initializing database:", err);
  });

// Routes
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);
app.use("/todos", todoRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});