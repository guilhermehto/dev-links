import clsx from 'clsx';

type ButtonProps = {
  children: string;
  type?: 'submit' | 'button';
  variant?: 'default' | 'outline';
};

export const Button = ({
  children,
  type = 'button',
  variant = 'default',
}: ButtonProps) => {
  const classes = clsx(
    'text-white rounded-lg py-2.5 px-7',
    {
      'bg-purple active:bg-purple-hover active:drop-shadow':
        variant === 'default',
    },
    {
      'border text-purple font-bold border-purple active:bg-purple-light':
        variant === 'outline',
    },
  );

  return (
    <button class={classes} type={type}>
      {children}
    </button>
  );
};
