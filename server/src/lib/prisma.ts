import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "../generated/prisma/index.js";
const connectionString = `${process.env.DATABASE_URL}`
// Provide adapter
const adapter = new PrismaPg({ connectionString }) 
const prisma = new PrismaClient({ adapter })

export { prisma }