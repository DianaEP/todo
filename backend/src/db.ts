import sqlite3 from "sqlite3";
import { Database, open } from "sqlite";

let db: Database;

export const initDb = async () => {
    db = await open({
        filename: "database.sqlite",
        driver: sqlite3.Database,
    });
    
    await db.exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
    )`);

    await db.exec(`CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT,
        completed BOOLEAN DEFAULT 0
    )`);
};

export const getDb = () => db;