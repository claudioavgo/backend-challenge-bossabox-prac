import { Hono } from "hono";
import toolsRoutes from "./routes/tools.routes";
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
import authRoutes from "./routes/auth.routes";

const app = new Hono().basePath("/api/v1/")

app.route("/", authRoutes)
app.route("/tools", toolsRoutes)

export default app