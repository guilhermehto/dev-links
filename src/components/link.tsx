import { twMerge } from 'tailwind-merge';

type LinkProps = {
  href: string;
  children: string;
  type?: 'submit' | 'button';
  rightElement?: JSX.Element;
  isActive?: boolean;
};

export const Link = ({
  href,
  children,
  type = 'button',
  rightElement,
  isActive,
}: LinkProps) => {
  return (
    <a
      href={href}
      class={twMerge(
        'text-white rounded-lg py-2.5 px-7 relative no-underline inline-block',
        'text-gray font-semibold border-purple active:bg-purple-light active:text-purple',
        !!rightElement && 'pl-11',
        isActive && 'bg-purple-light text-purple',
      )}
      type={type}
    >
      <div class="flex items-center">
        {rightElement ? (
          <span class="z-10 h-5 w-5 absolute text-inherit left-4">
            {rightElement}
          </span>
        ) : null}
        {children}
      </div>
    </a>
  );
};
