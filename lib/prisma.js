// prisma.js
import "dotenv/config";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Import the generated client from the custom output configured in schema.prisma.
import { PrismaClient } from "../generated/prisma/client.ts";

// 1. Initialize the PostgreSQL connection pool
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// 2. Instantiate the client using the adapter
const prisma = new PrismaClient({ adapter });

export default prisma;
