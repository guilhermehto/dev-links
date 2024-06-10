import { twMerge } from 'tailwind-merge';

type RowProps = {
  children: JSX.Element | JSX.Element[];
  spacing?: 'sm' | 'md' | 'lg' | 'between';
};

export const Row = ({ children, spacing = 'sm' }: RowProps) => {
  return (
    <div
      class={twMerge(
        'flex flex-row',
        spacing === 'sm' && 'gap-2',
        spacing === 'md' && 'gap-6',
        spacing === 'lg' && 'gap-10',
        spacing === 'between' && 'justify-between',
      )}
    >
      {children}
    </div>
  );
};
