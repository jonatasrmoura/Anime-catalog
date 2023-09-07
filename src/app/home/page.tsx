"use client";
import { useState, useEffect } from "react";

import { Anime } from "@/components/Anime";
import { CardAnime } from "@/components/CardAnime";
import { ContainerCard } from "@/components/ContainerCard";
import { IAnimes, IDataAnime, useAnimes } from "@/contexts/AnimesContext";
import { api } from "@/services/api";

export default function Page() {
  const { text } = useAnimes();
  const [animes, setAnimes] = useState<IDataAnime[]>([]);
  const [page, setPage] = useState(0);
  const animeCard = {
    title: !text ? 'Inicio' : 'Minha pesquisa',
    colorLine: !text ? 'bg-red-600' : 'bg-info'
  };
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

  return (
    <>
      <ContainerCard title={animeCard.title} colorLine={animeCard.colorLine} id="Initial">
        <CardAnime>
          {animes ? (
            animes.map((anime) => (
              <Anime
                key={anime.id}
                link={`/anime/${anime.id}`}
                image={anime.attributes.posterImage.small}
                name={anime.attributes.canonicalTitle}
                description={`${anime.attributes.description.substring(0, 80)}...`}
              />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </CardAnime>
      </ContainerCard>
    </>
  );
}
