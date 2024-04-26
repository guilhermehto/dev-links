import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';

const turso = createClient({
  url: process.env.DB_URL ?? '',
  authToken: process.env.DB_AUTH_TOKEN,
});

const db = drizzle(turso);

await migrate(db, { migrationsFolder: './src/db/migrations' });

turso.close();
