"use client";

import { Anime } from "@/components/Anime";
import { CardAnime } from "@/components/CardAnime";
import { ContainerCard } from "@/components/ContainerCard";
import { Loading } from "@/components/Loading";
import { useAnimes } from "@/contexts/AnimesContext";

export default function Page() {
  const { text, animes } = useAnimes();

  const animeCard = {
    title: !text ? "Inicio" : "Minha pesquisa",
    colorLine: !text ? "bg-red-600" : "bg-info",
  };

  return (
    <>
      {animes.length >= 1 ? (
        <section className="bg-primary rounded pt-20">
          <ContainerCard
            title={animeCard.title}
            colorLine={animeCard.colorLine}
            id="Initial"
          >
            <CardAnime>
              {animes.map((anime) => (
                <Anime
                  key={anime.id}
                  link={`/anime/${anime.id}`}
                  image={anime.attributes.posterImage.small}
                  name={anime.attributes.canonicalTitle}
                  description={`${anime.attributes.description.substring(
                    0,
                    80
                  )}...`}
                />
              ))}
            </CardAnime>
          </ContainerCard>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
