import Elysia, { Context, t } from 'elysia';
import { Register } from '../pages/register';
import { Login } from '../pages/login';
import { Argon2id } from 'oslo/password';
import { usersService } from '../db/users-service';
import { lucia } from '../lib/auth';

const registerBody = t.Object({
  email: t.String(),
  password: t.String(),
  confirm: t.String(),
});

const loginBody = t.Object({
  email: t.String(),
  password: t.String(),
});

type RegisterRequest = Context & {
  body: typeof registerBody;
};

type LoginRequest = Context & {
  body: typeof loginBody;
};

const handleRegister = async ({ body, cookie, set }: RegisterRequest) => {
  const { email, password, confirm } = body;
  if (!email || !password || !confirm) {
    return;
  }

  // TODO: Validate body properly

  const existingUser = await usersService.getByEmail(email);
  console.log('existing user?', existingUser);
  if (existingUser) {
    // TODO: handle existing user
    return;
  }

  const hashedPassword = await new Argon2id().hash(password);

  const newUser = await usersService.createOne({
    email: email,
    password: hashedPassword,
  });

  const session = await lucia.createSession(newUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookie[sessionCookie.name].set({
    value: sessionCookie.value,
    ...sessionCookie.attributes,
  });

  set.redirect = '/';
};

const handleLogin = async ({ body, cookie, set }: LoginRequest) => {
  const { email, password } = body;
  // TODO: Validate body properly
  if (!email || !password) {
    return;
  }

  const existingUser = await usersService.getByEmail(email);
  if (!existingUser) {
    return;
  }

  const validPassword = await new Argon2id().verify(
    existingUser.password!,
    password,
  );

  if (!validPassword) {
    console.log('returning, invalid password');
    return;
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookie[sessionCookie.name].set({
    value: sessionCookie.value,
    ...sessionCookie.attributes,
  });

  console.log('logged in');

  set.redirect = '/';
};

export const authRouter = new Elysia()
  .get('login', Login)
  .post('login', handleLogin)
  .get('register', Register)
  .post('/register', handleRegister);
