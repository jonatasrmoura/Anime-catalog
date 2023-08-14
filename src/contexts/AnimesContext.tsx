"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { api } from "@/services/api";

type ILinkData = {
  links: {
    related: string;
    self: string;
  }
};

type IDataAnime = [{
  attributes: {
    canonicalTitle: string;
    description: string;
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
}];

type IAnime = {
  data: IDataAnime;
  links: {
    first: string;
    last: string;
    next: string;
  };
  meta: { count: number };
};

type AnimeContextData = {
  info: IAnime;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

type AnimeProviderProps = {
  children: ReactNode;
};

export const AnimeContext = createContext({} as AnimeContextData);

export function AuthProvider({ children }: AnimeProviderProps) {
  const [info, setInfo] = useState<IAnime>({} as IAnime);
  const [text, setText] = useState('');

  const router = useRouter();

  useEffect(() => {
    api.get(text ? `/anime?filter[text]=${text}&page[limit]=15` : `/anime?page[limit]=15`)
    .then(({ data }) => {
      setInfo(data);
      router.push('#Initial');
    });
  }, [text, router]);

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
