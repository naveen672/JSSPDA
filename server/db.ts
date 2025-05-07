import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";
import { log } from "./vite";

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });

export const initializeDatabase = async () => {
  try {
    // Test the database connection
    const result = await pool.query('SELECT NOW()');
    log(`Database connected at ${result.rows[0].now}`, "db");
  } catch (error) {
    log(`Database connection failed: ${(error as Error).message}`, "db");
    throw error;
  }
};