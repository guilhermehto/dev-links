import { Button } from './button';
import { Link } from './link';
import { Logo } from './logo';

export const Nav = () => {
  return (
    <nav class="bg-white h-[78px] p-4 flex rounded-lg w-full justify-between items-center">
      <Logo />
      <div>
        <Link
          rightElement={<span class="icon-[ph--link-bold] h-full w-full" />}
          href="/"
          isActive
        >
          Links
        </Link>

        <Link
          href="/"
          rightElement={
            <span class="icon-[ph--user-circle-bold] w-full h-full" />
          }
        >
          Profile Details
        </Link>
      </div>
      <Button variant="outline">Preview</Button>
    </nav>
  );
};
