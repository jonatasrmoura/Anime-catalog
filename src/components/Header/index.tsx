"use client";
import React, { useMemo } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import Image from "next/image";

import { Search } from "../Search";
import { lolisPhoto } from "@/utils/lolisPhoto";
import { SignIn } from "../modal/SignIn";


export function Header() {
  const profilePhoto = useMemo(() => {
    const indice = Math.floor(Math.random() * lolisPhoto.length);
    return lolisPhoto[indice];
  }, []);

  return (
    <header className="
      h-[15vh]
      px-4
      flex
      justify-between
      items-center
    ">
      <Dialog.Root>
        <Dialog.Trigger className="hidden md:flex items-center gap-2">
          <Image
            className="rounded-full border-2 border-info h-20 w-20"
            src={profilePhoto}
            alt={profilePhoto}
            width={80}
            height={80}
            unoptimized
          />
          <span className='text-lg font-semibold'>Visitante</span>
        </Dialog.Trigger>
          
        <SignIn />
      </Dialog.Root>
      
      <div className="m-auto w-[75%] md:m-0 md:w-1/3">
        <Search />
      </div>
    </header>
  );
}
