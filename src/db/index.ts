import * as schema from './schema';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

export const getClient = () => {
  const client = createClient({
    url: process.env.DB_URL ?? '',
    authToken: process.env.DB_AUTH_TOKEN,
  });

  return client;
};

export const getDb = () => {
  const client = getClient();
  return drizzle(client, { schema });
};
