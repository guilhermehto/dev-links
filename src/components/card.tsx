import { twMerge } from 'tailwind-merge';

type CardProps = {
  children: JSX.Element | string | JSX.Element[];
  variation?: 'default' | 'secondary';
  class?: string;
};

export const Card = ({ children, class: className, variation }: CardProps) => {
  return (
    <div
      class={twMerge(
        'p-10 bg-white rounded-lg',
        variation === 'secondary' && 'bg-off-white',
        className,
      )}
    >
      {children}
    </div>
  );
};
