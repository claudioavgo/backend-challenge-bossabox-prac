import { Hono } from "hono";
import { logger } from 'hono/logger'
import toolsRoutes from "./routes/tools.routes";
import authRoutes from "./routes/auth.routes";

const app = new Hono().basePath("/api/v1/")

app.use(logger())
app.route("/", authRoutes)
app.route("/tools", toolsRoutes)

app.onError((err, c) => {
    return c.json({
        error: err.message
    }, 400)
})

export default app