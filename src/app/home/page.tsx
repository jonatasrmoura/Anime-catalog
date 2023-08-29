"use client";
import { Anime } from "@/components/Anime";
import { CardAnime } from "@/components/CardAnime";
import { ContainerCard } from "@/components/ContainerCard";
import { useAnimes } from "@/contexts/AnimesContext";

export default function Page() {
  const { info, text } = useAnimes();
  const animeCard = {
    title: !text ? 'Inicio' : 'Minha pesquisa',
    colorLine: !text ? 'bg-red-600' : 'bg-info'
  };

  return (
    <>
      <ContainerCard title={animeCard.title} colorLine={animeCard.colorLine} id="Initial">
        <CardAnime>
          {info.data && (
            info.data.map((anime) => (
              <Anime
                key={anime.id}
                link={`/anime/${anime.id}`}
                image={anime.attributes.posterImage.small}
                name={anime.attributes.canonicalTitle}
                description={`${anime.attributes.description.substring(0, 80)}...`}
              />
            ))
          )}
        </CardAnime>
      </ContainerCard>
    </>
  );
}
