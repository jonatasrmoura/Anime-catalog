"use client";
import { useEffect, useState, MouseEvent } from "react";
import Image from "next/image";
import YouTube from "react-youtube";

import { ContainerCard } from "@/components/ContainerCard";
import { IDataAnime } from "@/contexts/AnimesContext";

import { api } from "@/services/api";
import { InfoAnime } from "@/components/InfoAnime";

interface IPageProps {
  params: {
    id: number;
  }
}

interface IAnime {
  data: IDataAnime;
}

export default function Page({ params }: IPageProps) {
  const [anime, setAnime] = useState<IAnime>();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  function _onReady(event: any) {
    event.target.pauseVideo();
  }

  console.log(anime?.data.attributes)

  useEffect(() => {
    api.get(`anime/${params.id}`)
    .then(response => setAnime(response.data));
  }, [params.id]);

  return ( 
    <main className="h-screen overflow-y-scroll">
      {anime ? (
        <ContainerCard title={anime.data.attributes.canonicalTitle} colorLine={'bg-violet-600'}>
          <div className="max-w-lg flex flex-col gap-6 m-auto mt-32">
            <Image
              className="h-72 w-72  m-auto rounded-full border-2 border-info"
              src={anime.data.attributes.posterImage.original}
              alt={anime.data.attributes.canonicalTitle}
              width={1000}
              height={300}
              unoptimized
            />
            <h2 className="text-lg font-bold text-center">
              {anime.data.attributes.canonicalTitle}
              <br />
              {anime.data.attributes.titles.ja_jp}
            </h2>

            <InfoAnime
              title="Descrição"
              value={anime.data.attributes.description}
            />

            {anime.data.attributes.episodeCount && (
              <InfoAnime
                title="Quantidade de episódio"
                value={anime.data.attributes.episodeCount}
              />
            )}

            <InfoAnime
              title="Tipo do conteúdo"
              value={anime.data.attributes.showType}
            />

            <InfoAnime
              title="Data de lançamento"
              value={new Intl.DateTimeFormat('pt-BR').format(
                new Date(anime.data.attributes.startDate)
              )}
            />

            <div>
              <span className="text-lg font-bold">Trailer</span>
              <YouTube
                videoId={anime.data.attributes.youtubeVideoId}
                opts={opts}
                onReady={_onReady}
              />
            </div>
          </div>
        </ContainerCard>
      ) : (
        <h1>Carregando...</h1>
      )}
    </main>
  );
}
