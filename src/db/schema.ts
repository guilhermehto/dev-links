import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email'),
  password: text('password'),
});

export const session = sqliteTable('session', {
  id: text('id').primaryKey(),
  user_id: integer('user_id')
    .notNull()
    .references(() => users.id),
  expires_at: integer('expires_at').notNull(),
});

export const links = sqliteTable('links', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  link: text('link').notNull(),
  user_id: integer('user_id')
    .notNull()
    .references(() => users.id),
});

export const platforms = sqliteTable('platforms', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
});
