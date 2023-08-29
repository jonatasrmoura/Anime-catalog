"use client";
import React, { useMemo, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";

import { Search } from "../Search";
import { lolisPhoto } from "@/utils/lolisPhoto";
import { SignIn } from "./SignIn";
import { CreateNewAccount } from "./CreateNewAccount";
import { useAnimes } from "@/contexts/AnimesContext";

export type IChooseHeaderModal = 'SignIn' | 'CreateNewAccount';

export function Header() {
  const { text, setText } = useAnimes();
  const [chooseHeaderModal, setChooseHeaderModal] = useState<IChooseHeaderModal>('SignIn');
  const router = useRouter();
  const pathName = usePathname();

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
      {pathName !== '/home' ? (
        <button type="button" onClick={router.back} className="transition-opacity hover:opacity-70">
          <BsArrowLeft size={32} />
        </button>
      ) : (
        <Image
          className="h-20 w-20 animate-pulse"
          src={'/icons/logo.png'}
          alt={'Dragon logo'}
          width={80}
          height={80}
          unoptimized
        />
      )}
      <div className="m-auto w-[75%] md:m-0 md:w-1/3">
        <Search
          label="Pesquisar anime"
          value={text}
          onChange={search => setText(search as any)}
        />
      </div>


      <Dialog.Root>
        <Dialog.Trigger className="hidden md:flex md:flex-col items-center gap-2">
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

        {chooseHeaderModal === 'SignIn' ? (
          <SignIn handleNewAccount={setChooseHeaderModal} />
        ) : (
          <CreateNewAccount handleSignIn={setChooseHeaderModal} />
        )}
      </Dialog.Root>
    </header>
  );
}
