import Elysia, { t } from 'elysia';
import { Register } from '../pages/register';
import { Login } from '../pages/login';

export const authRouter = new Elysia()
  .get('login', Login)
  .get('register', Register)
  .post(
    '/register',
    ({ body }) => {
      return body;
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
        confirm: t.String(),
      }),
    },
  );
