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
                image={anime.attributes.posterImage.small}
                name={anime.attributes.canonicalTitle}
                description={`${anime.attributes.description.substring(0, 80)}...`}
              />
            ))
          )}
        </CardAnime>
      </ContainerCard>

      {/* <ContainerCard title="Novidades" colorLine="bg-violet-600">
        <CardAnime>
          <Anime
            image='https://vocesabianime.com/wp-content/uploads/2020/03/Nanatsu-no-taizai-1000x701.jpg'
            name="Nanatsu no Taizai"
            description="Os sete pecados capitais iram enfrentar o rei dos demonios"
          />
        </CardAnime>
      </ContainerCard> */}
    </>
  );
}
