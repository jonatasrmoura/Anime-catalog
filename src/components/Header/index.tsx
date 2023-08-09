import { useMemo } from "react";
import Image from "next/image";

import { Search } from "../Search";
import { lolisPhoto } from "@/utils/lolisPhoto";

export function Header() {
  const profilePhoto = useMemo(() => {
    const indice = Math.floor(Math.random() * lolisPhoto.length);
    return lolisPhoto[indice];
  }, []);

  return (
    <header className="
      h-20
      px-4
      flex
      justify-between
      items-center
    ">
      <div className="hidden md:flex items-center gap-2">
        <Image
          className="rounded-full border-2 border-info h-16 w-16"
          src={profilePhoto}
          alt={profilePhoto}
          width={64}
          height={64}
          unoptimized
        />
        <span>Visitante</span>
      </div>
      
      <div className="m-auto w-[75%] md:m-0 md:w-1/4">
        <Search />
      </div>
    </header>
  );
}
