import clsx from 'clsx';

type StackProps = {
  children: JSX.Element | JSX.Element[];
  spacing?: 'sm' | 'md' | 'lg';
};

export const Stack = ({ children, spacing = 'sm' }: StackProps) => {
  const classes = clsx(
    'flex flex-col',
    { 'gap-2': spacing === 'sm' },
    { 'gap-6': spacing === 'md' },
    { 'gap-10': spacing === 'lg' },
  );
  return <div class={classes}>{children}</div>;
};
