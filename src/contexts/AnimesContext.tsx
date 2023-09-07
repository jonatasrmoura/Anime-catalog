"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from "react";

export type ILinkData = {
  links: {
    related: string;
    self: string;
  }
};

export type IDataAnime = {
  attributes: {
    canonicalTitle: string;
    description: string;
    showType: string;
    subtype: string;
    episodeCount: number;
    synopsis: string;
    youtubeVideoId: string;
    startDate: string;
    posterImage: {
      large: string;
      medium: string;
      original: string;
      small: string;
      tiny: string;
    }
    titles: {
      en: string;
      en_jp: string;
      ja_jp: string;
    }
  };
  id: string;
  links: { self: string; };
  relationships: {
    animeCharacters: ILinkData;
    animeProductions: ILinkData;
    episodes: ILinkData;
    genres: ILinkData;
    productions: ILinkData;
    reviews: ILinkData;
    staff: ILinkData;
  };
  type: string;
};

export type IAnimes = {
  data: IDataAnime[];
  links: {
    first: string;
    last: string;
    next: string;
  };
  meta: { count: number };
};

export type AnimeContextData = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

type AnimeProviderProps = {
  children: ReactNode;
};

export const AnimeContext = createContext({} as AnimeContextData);

export function AuthProvider({ children }: AnimeProviderProps) {
  const [text, setText] = useState('');

  const values = useMemo(() => ({
    text,
    setText,
  }), [text]);

  return (
    <AnimeContext.Provider value={values}>
      {children}
    </AnimeContext.Provider>
  );
}

export function useAnimes() {
  const context = useContext(AnimeContext);
  return context;
}
