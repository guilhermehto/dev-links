type ButtonProps = {
  children: string;
  type?: 'submit' | 'button';
};

export const Button = ({ children, type = 'button' }: ButtonProps) => {
  return (
    <button
      class="text-white rounded-lg bg-purple py-3 active:bg-purple-hover active:drop-shadow"
      type={type}
    >
      {children}
    </button>
  );
};
