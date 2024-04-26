import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  driver: 'turso',
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.DB_URL ?? '',
    authToken: process.env.DB_AUTH_TOKEN,
  },
  verbose: true,
});
