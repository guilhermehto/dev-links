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
  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    typeof confirm !== 'string'
  ) {
    set.status = 400;
    return;
  }

  const getPasswordValidation = () => {
    if (!password) return "Can't be empty";
    if (password.length < 6) return 'Minimun of 6 characters';
  };

  const getConfirmValidation = () => {
    if (!confirm) return "Can't be empty";
    if (confirm !== password) return 'Not matching';
  };

  const getEmailValidation = () => {
    if (!email) return "Can't be empty";
    if (!email.includes('@')) return 'Not an email';
  };

  const passwordValidation = getPasswordValidation();
  const emailValidation = getEmailValidation();
  const confirmValidation = getConfirmValidation();

  if (!!passwordValidation || !!emailValidation || !!confirmValidation) {
    set.status = 422;
    return (
      <Register
        defaultValues={{
          email,
          password,
          confirm,
        }}
        validation={{
          email: emailValidation,
          password: passwordValidation,
          confirm: confirmValidation,
        }}
      />
    );
  }

  const existingUser = await usersService.getByEmail(email);
  if (existingUser) {
    set.status = 422;
    return (
      <Register
        defaultValues={{
          email,
          password,
          confirm,
        }}
        validation={{
          email: 'User already exists',
        }}
      />
    );
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
  if (typeof email !== 'string' || typeof password !== 'string') {
    set.status = 400;
    return;
  }

  const getPasswordValidation = () => {
    if (!password) return "Can't be empty";
  };

  const getEmailValidation = () => {
    if (!email) return "Can't be empty";
    if (!email.includes('@')) return 'Not an email';
  };

  const passwordValidation = getPasswordValidation();
  const emailValidation = getEmailValidation();

  if (!!passwordValidation || !!emailValidation) {
    set.status = 422;
    return (
      <Login
        defaultValues={{
          email,
          password,
        }}
        validation={{
          email: emailValidation,
          password: passwordValidation,
        }}
      />
    );
  }

  const existingUser = await usersService.getByEmail(email);
  if (!existingUser) {
    set.status = 422;
    return (
      <Login
        defaultValues={{
          email,
          password,
        }}
        validation={{
          email: 'Invalid user or password',
          password: 'Invalid user or password',
        }}
      />
    );
  }

  const validPassword = await new Argon2id().verify(
    existingUser.password!,
    password,
  );

  if (!validPassword) {
    set.status = 401;
    return (
      <Login
        defaultValues={{
          email,
          password,
        }}
        validation={{
          email: 'Invalid user or password',
          password: 'Invalid user or password',
        }}
      />
    );
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
