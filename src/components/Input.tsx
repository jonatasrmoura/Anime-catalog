import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { FormErrorMessage } from "./FormErrorMessage";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  label,
  name,
  error = null,
  ...rest
}, ref) => {
  return (
    <div className="mt-3">
      <label htmlFor="helper-text" className="block mb-1 text-base font-normal text-gray-900 dark:text-white">
        {label}:
      </label>
      <input
        className="
          bg-gray-50
          border
          border-gray-300
          text-base
          rounded-lg
          focus:ring-blue-500
          focus:border-blue-500
          block
          w-full
          p-2.5
          mb-1
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        id={name}
        name={name}
        ref={ref}
        {...rest}
      />
      { !!error && <FormErrorMessage description={String(error.message)} /> }
    </div>
  );
}

export const Input = forwardRef(InputBase);
