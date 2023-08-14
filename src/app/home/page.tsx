"use client";
import { Anime } from "@/components/Anime";
import { CardAnime } from "@/components/CardAnime";
import { ContainerCard } from "@/components/ContainerCard";
import { useAnimes } from "@/contexts/AnimesContext";

export default function Page() {
  const { info } = useAnimes();

  return (
    <>
      <ContainerCard title="Populares" colorLine="bg-red-600">
        <CardAnime>
          {info.data && (
            info.data.map((anime: any) => (
              <Anime
                key={anime.id}
                image={anime.attributes.posterImage.small}
                name={anime.attributes.canonicalTitle}
                description="Os sete pecados capitais iram enfrentar o rei dos demonios"
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
