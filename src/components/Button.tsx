import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingMessage?: string;
}

export function Button({
  isLoading = false,
  loadingMessage = `Carregando`,
  ...rest }: ButtonProps) {
  return (
    <button
      className='w-full h-full px-5 py-3 border-2 border-info  text-text rounded-lg hover:bg-info/80 hover:border-gray-300'
      disabled={isLoading}
      { ...rest }
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <svg
            className="border-2 border-r-text border-l-text border-b-text border-t-info rounded-full animate-spin h-7 w-7 mr-3"
            viewBox="0 0 24 24"
          />
          {loadingMessage}
        </div>
      ) : rest.children}
    </button>
  );
}
