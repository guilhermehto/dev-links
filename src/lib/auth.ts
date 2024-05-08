import { Lucia } from 'lucia';
import { LibSQLAdapter } from '@lucia-auth/adapter-sqlite';
import { getClient } from '../db';
import { Cookie } from 'elysia';

export const adapter = new LibSQLAdapter(getClient(), {
  user: 'users',
  session: 'session',
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.email,
    };
  },
});

export const wipeSession = (cookie: Record<string, Cookie<any>>) => {
  const sessionCookie = lucia.createBlankSessionCookie();
  cookie[sessionCookie.name].set({
    value: sessionCookie.value,
    ...sessionCookie.attributes,
  });
};

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    UserId: number;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  email: string;
}
