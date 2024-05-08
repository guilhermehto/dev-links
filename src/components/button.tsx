import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: string;
  type?: 'submit' | 'button';
  variant?: 'default' | 'outline' | 'link';
};

export const Button = ({
  children,
  type = 'button',
  variant = 'default',
}: ButtonProps) => {
  return (
    <button
      class={twMerge(
        'text-white rounded-lg py-2.5 px-7',
        variant === 'default' &&
          'bg-purple active:bg-purple-hover active:drop-shadow',
        variant === 'outline' &&
          'border text-purple font-bold border-purple active:bg-purple-light',
        variant === 'link' &&
          'text-gray font-bold border-purple active:bg-purple-light',
      )}
      type={type}
    >
      {children}
    </button>
  );
};
