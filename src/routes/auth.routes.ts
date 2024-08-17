// books.ts
import { Hono } from 'hono'
import { db } from '../db/connection'
import { z } from "zod";
import { validator } from 'hono/validator';
import { mail } from '../services/mail.services';
import { randomUUID } from 'node:crypto';
import { authLinks } from '../db/schema';
import dayjs from 'dayjs';
import { Auth } from '../utils/auth';
import { eq } from 'drizzle-orm';

const MagicLinkRequest = z.object({
    email: z.string()
})

const authRoutes = new Hono()
    .basePath("/auth")
    .post('/send-magic-link',
        validator('json', (value, c) => {
            const parsed = MagicLinkRequest.safeParse(value)

            if (!parsed.success) {
                return c.json({ message: "JSON is not valid." }, 400)
            }

            return parsed.data

        }), async (c) => {
            const { email } = c.req.valid('json')

            const user = await db.query.users.findFirst({
                where(fields, { eq }) {
                    return eq(fields.email, email)
                },
            })

            if (!user) {
                return c.json({
                    message: "User not found"
                }, 400)
            }

            const authLinkCode = randomUUID();

            await db.insert(authLinks).values({
                userId: user.id,
                code: authLinkCode,
            })

            const authLink = new URL('/api/v1/auth/authenticate', String(process.env.BASE_URL))

            authLink.searchParams.set('code', authLinkCode)

            mail.emails.send({
                from: 'Tools <tools@claudioav.com>',
                to: [email],
                subject: '🪄 Login With Magic Link',
                html: `<strong>${authLink}</strong>`,
            })

            return c.json({ message: "Mail sended" })
        })
    .get("/authenticate", async (c) => {
        const { code } = c.req.query()

        const authLinkFromCode = await db.query.authLinks.findFirst({
            where(fields, { eq }) {
                return eq(fields.code, code)
            },
        })

        if (!authLinkFromCode) {
            throw new Error('Auth link not found')
        }

        const daysSinceAuthLinkWasCreated = dayjs().diff(
            authLinkFromCode.createdAt,
            'days',
        )

        if (daysSinceAuthLinkWasCreated > 7) {
            throw new Error('Auth link expired, please generate a new one')
        }

        await Auth.login(c, authLinkFromCode.userId)

        await db.delete(authLinks).where(eq(authLinks.code, code))

        return c.json({ message: "Logged in" }, 200)
    })

export default authRoutes