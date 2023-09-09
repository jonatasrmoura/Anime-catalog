import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDebounce } from '@/hooks/useDebounce';
import { useAnimes } from '@/contexts/AnimesContext';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label: string;
};

export function Search({ label, value, onChange }: InputProps) {
  const { setIsLoading } = useAnimes();
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 1500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <form className="w-full flex items-center">   
      <label htmlFor="voice-search" className="sr-only">{label}</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
          ☯
        </div>
        <input
          id="voice-search"
          className="
            h-12
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block w-full
            pl-10 
            p-2.5
            placeholder:text-gray-400 
            dark:bg-gray-700 
            dark:border-gray-600 
            dark:placeholder-gray-400 
            dark:text-white 
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500
          "
          required
          placeholder="Digite o anime"
          value={displayValue}
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">
          <AiOutlineSearch />
        </div>
      </div>
    </form>
  );
}
