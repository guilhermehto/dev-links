import clsx from 'clsx';

type InputProps = {
  defaultValue?: string;
  placeholder?: string;
  label: string;
  type?: 'text' | 'password';
  rightElement?: JSX.Element;
  name?: string;
};
export const Input = ({
  label,
  placeholder,
  defaultValue,
  type = 'text',
  rightElement,
  name,
}: InputProps) => {
  const inputClasses = clsx(
    'rounded-lg border-light-gray border-solid border p-3 placeholder-gray w-full text-black',
    'focus:border-purple outline-none focus:drop-shadow',
    { 'pl-11': !!rightElement },
  );
  return (
    <label class="flex flex-col text-xs text-black gap-y-1 w-full">
      {label}
      <div class="relative flex items-center text-base">
        {rightElement ? (
          <span class="z-10 h-4 w-4 ml-4 absolute text-gray">
            {rightElement}
          </span>
        ) : null}
        <input
          name={name}
          type={type}
          value={defaultValue}
          placeholder={placeholder}
          class={inputClasses}
        />
      </div>
    </label>
  );
};
