import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: string;
  type?: 'submit' | 'button';
  variant?: 'default' | 'outline' | 'link';
  rightElement?: JSX.Element;
  class?: string;
};

export const Button = ({
  children,
  type = 'button',
  variant = 'default',
  rightElement,
  class: className,
}: ButtonProps) => {
  return (
    <button
      class={twMerge(
        'text-white font-semibold rounded-lg py-2.5 px-7 relative',
        variant === 'default' &&
          'bg-purple active:bg-purple-hover active:drop-shadow',
        variant === 'outline' &&
          'border text-purple font-semibold border-purple active:bg-purple-light',
        variant === 'link' &&
          'text-gray font-semibold border-purple active:bg-purple-light active:text-purple',
        !!rightElement && 'pl-11',
        className,
      )}
      type={type}
    >
      <div class="flex items-center w-full justify-center">
        {rightElement ? (
          <span class="z-10 h-5 w-5 absolute text-inherit left-4">
            {rightElement}
          </span>
        ) : null}
        {children}
      </div>
    </button>
  );
};
