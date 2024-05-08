import { Context } from 'elysia';
import { wipeSession, lucia } from './lib/auth';

export const authDeriver = async ({ cookie, set }: Context) => {
  const sessionId = cookie.auth_session.value;
  if (sessionId) {
    const { session, user } = await lucia.validateSession(sessionId);
    if (!session) {
      wipeSession(cookie);
      set.redirect = '/login';
      return {};
    } else {
      return { auth: { user } };
    }
  } else {
    set.redirect = '/login';
    return {};
  }
};
