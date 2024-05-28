import clsx from 'clsx';

type StackProps = {
  children: JSX.Element | JSX.Element[];
  spacing?: 'sm' | 'md' | 'lg';
  class?: string;
};

export const Stack = ({
  children,
  spacing = 'sm',
  class: className,
}: StackProps) => {
  const classes = clsx(
    'flex flex-col',
    { 'gap-2': spacing === 'sm' },
    { 'gap-6': spacing === 'md' },
    { 'gap-10': spacing === 'lg' },
    className,
  );
  return <div class={classes}>{children}</div>;
};
