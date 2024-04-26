import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import { Index } from './pages';

const app = new Elysia().use(html()).get('/', Index).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
