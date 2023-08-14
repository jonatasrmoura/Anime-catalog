"use client";

import { api } from "@/services/api";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type AnimeContextData = {
  info: any;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export const AnimeContext = createContext({} as AnimeContextData);

type AnimeProviderProps = {
  children: ReactNode;
}

export function AuthProvider({ children }: AnimeProviderProps) {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      api.get(`/anime?filter[text]=${text}&page[limit]=15`)
      .then(({ data }) => {
        setInfo(data);
      });
    }
  }, [text]);

  return (
    <AnimeContext.Provider value={{ info, text, setText }}>
      {children}
    </AnimeContext.Provider>
  );
}

export function useAnimes() {
  const context = useContext(AnimeContext);
  return context;
}
