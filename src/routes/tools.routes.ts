// books.ts
import { Hono } from 'hono'
import { db } from '../db/connection'
import { z } from "zod";
import { tools } from '../db/schema';
import { arrayContains, eq } from 'drizzle-orm';
import { validator } from 'hono/validator';
import { jwt } from 'hono/jwt';

const ToolSchema = z.object({
    title: z.string(),
    link: z.string(),
    description: z.string(),
    tags: z.string().array()
})

const toolsRoutes = new Hono()
    .use(
        '/*',
        jwt({
            secret: String(process.env.SECRET_TOKEN),
            cookie: 'session'
        })
    )
    .get('/', async (c) => {
        const { tag } = c.req.query()

        if (!tag) {
            const data = await db.query.tools.findMany()

            return c.json(data)
        }

        const data = await db.select().from(tools).where(arrayContains(tools.tags, [tag]));

        return c.json(data)
    })
    .post('/',
        validator('json', (value, c) => {
            const parsed = ToolSchema.safeParse(value)

            if (!parsed.success) {
                return c.json({ message: "JSON is not valid." }, 400)
            }

            return parsed.data

        }), async (c) => {
            const tool = c.req.valid('json')

            const [insertCallback] = await db.insert(tools).values(tool).returning();

            return c.json(insertCallback, 201)
        })
    .delete('/:id', async (c) => {
        const id = Number(c.req.param('id'));

        await db.delete(tools).where(eq(tools.id, id));

        return c.json({}, 200)
    })

export default toolsRoutes