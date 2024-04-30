import { Base } from '../components/base';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Input } from '../components/input';
import { Logo } from '../components/logo';
import { Stack } from '../components/stack';

type LoginProps = {
  validation?: Record<string, string | undefined>;
  defaultValues?: Record<string, string>;
};

export const Login = ({ validation, defaultValues }: LoginProps) => {
  return (
    <Base>
      <div class="flex flex-col items-center">
        <span class="pb-12">
          <Logo />
        </span>
        <Card class="w-[476px]">
          <form hx-post="/login" hx-target="body">
            <Stack spacing="md">
              <Stack>
                <h1 class="text-4xl font-bold">Login</h1>
                <p class="text-gray">
                  Add your details below to get back into the app
                </p>
              </Stack>
              <Input
                label="Email address"
                validationMessage={validation?.email}
                defaultValue={defaultValues?.email}
                name="email"
                placeholder="e.g. alex@email.com"
                rightElement={
                  <span class="icon-[ph--envelope-simple-fill] h-full w-full" />
                }
              />
              <Input
                label="Password"
                validationMessage={validation?.password}
                defaultValue={defaultValues?.password}
                name="password"
                placeholder="Enter your password"
                type="password"
                rightElement={<span class="icon-[ph--lock-key-fill]" />}
              />
              <Button type="submit">Login</Button>
              <p class="text-gray text-center">
                Don't have an account?{' '}
                <a href="/register" class="text-purple">
                  Create account
                </a>
              </p>
            </Stack>
          </form>
        </Card>
      </div>
    </Base>
  );
};
