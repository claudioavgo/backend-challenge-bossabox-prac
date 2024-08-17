import { Resend } from 'resend';

export const mail = new Resend(String(process.env.RESEND_API_KEY));