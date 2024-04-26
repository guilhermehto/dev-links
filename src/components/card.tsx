type CardProps = {
  children: JSX.Element | string;
};

export const Card = ({ children }: CardProps) => (
  <div class="p-10 bg-white rounded-lg">{children}</div>
);
