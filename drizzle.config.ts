import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dbCredentials: {
        url: String(process.env.DATABASE_URL)
    },
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
});