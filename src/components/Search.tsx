import { AiOutlineSearch } from 'react-icons/ai';

export function Search() {
  return (
    <form className="w-full flex items-center">   
      <label htmlFor="voice-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
          ☯
        </div>
        <input
          type="text"
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
            dark:bg-gray-700 
            dark:border-gray-600 
            dark:placeholder-gray-400 
            dark:text-white 
            dark:focus:ring-blue-500 
            dark:focus:border-blue-500
          "
          placeholder="Pesquisar"
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">
          <AiOutlineSearch />
        </div>
      </div>
    </form>
  );
}
