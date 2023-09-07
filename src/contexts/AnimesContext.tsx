"use client";
import { api } from "@/services/api";
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
  animes: IDataAnime[];
};

type AnimeProviderProps = {
  children: ReactNode;
};

export const AnimeContext = createContext({} as AnimeContextData);

export function AuthProvider({ children }: AnimeProviderProps) {
  const [text, setText] = useState('');
  const [animes, setAnimes] = useState<IDataAnime[]>([]);
  const [page, setPage] = useState(0);

  const loadMoreItems = () => {
    let url = '';

    if (text) {
      setAnimes([]);
      url = `/anime?filter[text]=${text}&page[limit]=15`;
    } else {
      url = `/anime?page[limit]=15&page[offset]=${page}`;
    }

    api.get<IAnimes>(`/anime?page[limit]=15&page[offset]=${page}`)
    .then(({ data: anime }) => {
      setAnimes(prevAnimes => {
        return [...prevAnimes, ...anime.data];
      });
      setPage(page + 1);
    });
  };

  useEffect(() => {
    loadMoreItems(); // Carregue os primeiros itens
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  const handleScroll = () => {
    // Verifique se o usuário chegou perto do final da página
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      loadMoreItems(); // Carregue mais itens
    }
  };

  const values = useMemo(() => ({
    text,
    setText,
    animes
  }), [text, animes]);

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
