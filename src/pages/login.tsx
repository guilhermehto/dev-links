import { Base } from '../components/base';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Input } from '../components/input';
import { Logo } from '../components/logo';
import { Stack } from '../components/stack';

export const Login = () => {
  return (
    <Base>
      <div class="flex flex-col items-center">
        <span class="pb-12">
          <Logo />
        </span>
        <Card class="w-[476px]">
          <Stack spacing="md">
            <Stack>
              <h1 class="text-4xl font-bold">Login</h1>
              <p class="text-gray">
                Add your details below to get back into the app
              </p>
            </Stack>
            <Input
              label="Email address"
              placeholder="e.g. alex@email.com"
              rightElement={
                <span class="icon-[ph--envelope-simple-fill] h-full w-full" />
              }
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              rightElement={<span class="icon-[ph--lock-key-fill]" />}
            />
            <Button>Login</Button>
            <p class="text-gray text-center">
              Don't have an account?{' '}
              <a href="/register" class="text-purple">
                Create account
              </a>
            </p>
          </Stack>
        </Card>
      </div>
    </Base>
  );
};
