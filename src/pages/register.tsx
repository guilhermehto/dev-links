import { Base } from '../components/base';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Input } from '../components/input';
import { Logo } from '../components/logo';
import { Stack } from '../components/stack';

export const Register = () => {
  return (
    <Base>
      <div class="flex flex-col items-center">
        <span class="pb-12">
          <Logo />
        </span>
        <Card class="w-[476px]">
          <form hx-post="/register">
            <Stack spacing="md">
              <Stack>
                <h1 class="text-4xl font-bold">Create account</h1>
                <p class="text-gray">
                  Let's get you started sharing your links!
                </p>
              </Stack>
              <Input
                name="email"
                label="Email address"
                placeholder="e.g. alex@email.com"
                rightElement={
                  <span class="icon-[ph--envelope-simple-fill] h-full w-full" />
                }
              />
              <Input
                name="password"
                label="Create password"
                placeholder="At least 8 characters"
                type="password"
                rightElement={<span class="icon-[ph--lock-key-fill]" />}
              />
              <Input
                name="confirm"
                label="Confirm password"
                placeholder="At least 8 characters"
                type="password"
                rightElement={<span class="icon-[ph--lock-key-fill]" />}
              />
              <p class="text-xs text-gray">
                Password must contain at least 8 characters
              </p>
              <Button type="submit">Create new account</Button>
              <p class="text-gray text-center">
                Already have an account?{' '}
                <a href="/login" class="text-purple">
                  Login
                </a>
              </p>
            </Stack>
          </form>
        </Card>
      </div>
    </Base>
  );
};
