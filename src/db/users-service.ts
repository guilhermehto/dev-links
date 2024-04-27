import { eq } from 'drizzle-orm';
import { getDb } from '.';
import { users } from './schema';

const getByEmail = async (email: string) => {
  const db = getDb();
  const result = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  return result;
};

const createOne = async (user) => {
  const db = getDb();
  const result = await db
    .insert(users)
    .values({
      ...user,
    })
    .returning();

  return result[0];
};

export const usersService = {
  getByEmail,
  createOne,
};
