import { ReactNode } from "react";

interface ICardAnimeProps {
  children: ReactNode;
}

export function CardAnime({ children }: ICardAnimeProps) {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {children}
    </div>
  );
}
