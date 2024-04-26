import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import { Index } from './pages';
import staticPlugin from '@elysiajs/static';
import { authRouter } from './routes/auth';

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .use(authRouter)
  .get('/', Index)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
