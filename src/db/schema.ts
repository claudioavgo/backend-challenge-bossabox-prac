import { serial, text, pgTable, uuid, timestamp } from "drizzle-orm/pg-core";

export const tools = pgTable("tools", {
    id: serial("id"),
    title: text("title"),
    link: text("link"),
    description: text("description"),
    tags: text("tags").array()
});

export const users = pgTable('users', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    phone: text('phone'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const authLinks = pgTable('auth_links', {
    id: serial('id').primaryKey(),
    code: text('code').notNull().unique(),
    userId: uuid('user_id')
        .references(() => users.id)
        .notNull(),
    createdAt: timestamp('created_at').defaultNow(),
})