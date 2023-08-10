import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface CreateAdModalProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export function CreateAdModal({ title, icon, children }: CreateAdModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="transition-all bg-background/60 inset-0 fixed" />

      <Dialog.Content className="
        fixed
        bg-background text-textLight
        py-8 px-10
        border border-info
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        rounded-lg
        w-[500px]
        shadow-lg shadow-black/25
        z-20
      ">
        <Dialog.Title className="text-3xl text-white font-black">
          <div className="flex items-center gap-2">
            {icon}
            {title}
          </div>
        </Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
