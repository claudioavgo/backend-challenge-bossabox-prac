import { decode, sign, verify } from 'hono/jwt'

import {
    getCookie,
    getSignedCookie,
    setCookie,
    setSignedCookie,
    deleteCookie,
} from 'hono/cookie'
import type { Context } from 'hono'

export class Auth {
    static async login(c: Context, id: string) {
        const payload = {
            sub: id,
            exp: Math.floor(Date.now() / 1000) + 60 * 1,
        }

        const secret = String(process.env.SECRET_TOKEN)
        const token = await sign(payload, secret)

        setCookie(c, 'session', token, {
            path: '/',
            secure: true,
            domain: 'localhost',
            httpOnly: true,
            maxAge: 1000,
            expires: new Date(Date.now() + 60 * 60 * 1000),
            sameSite: 'Strict',
        });
    }

    static async getUser(c: Context) {

    }
}