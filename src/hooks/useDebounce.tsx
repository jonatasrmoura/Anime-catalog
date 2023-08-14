import { useRef } from "react";

export function useDebounce(fn: any, delay: number) {
  const timeOutRef = useRef<any | null>(null);

  function debounceFn(...args: any) {
    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFn;
}
