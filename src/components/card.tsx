import clsx from 'clsx';

type CardProps = {
  children: JSX.Element | string;
  class?: string;
};

export const Card = ({ children, class: className }: CardProps) => {
  const classes = clsx('p-10 bg-white rounded-lg', className);
  return <div class={classes}>{children}</div>;
};
