import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import { Index } from './pages';
import { Login } from './pages/login';
import staticPlugin from '@elysiajs/static';

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get('/', Index)
  .get('login', Login)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
