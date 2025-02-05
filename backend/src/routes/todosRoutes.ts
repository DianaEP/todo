import express, { Request, Response, Router } from "express";
import { getDb } from "../db";

const todoRoutes = Router();

// Create a new Todo
todoRoutes.post("/", async (req: Request, res: Response):Promise<any> => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }

    try {
        const db = getDb();
        const result = await db.run("INSERT INTO todos (task) VALUES (?)", [task]);
        res.status(201).json(
            { 
                message: "Todo created successfully" ,
                id: result.lastID,
                task: task,
            });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// GET a single todo
todoRoutes.get("/:id", async (req: Request, res: Response):Promise<any> => {
    const { id } = req.params;

    try {
        const db = getDb();
        const todo = await db.get("SELECT * FROM todos WHERE id = ?", [id]);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Update a todo
todoRoutes.patch("/:id", async (req: Request, res: Response):Promise<any> => {
    const { id } = req.params;
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: "Task is required to update" });
    }

    try {
        const db = getDb();
        const result = await db.run("UPDATE todos SET task = ? WHERE id = ?", [task, id]);

        if (result.changes === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json({ message: "Todo updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});


// Get all Todos
todoRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const db = getDb();
        const todos = await db.all("SELECT * FROM todos");
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Delete a Todo by ID
todoRoutes.delete("/:id", async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    
    try {
        const db = getDb();
        const result = await db.run("DELETE FROM todos WHERE id = ?", [id]);
        
        if (result.changes === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }
        
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

export default todoRoutes;
