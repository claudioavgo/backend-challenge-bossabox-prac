import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connection = postgres(String(process.env.DATABASE_URL))

export const db = drizzle(connection, { schema })