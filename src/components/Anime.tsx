import Image from "next/image";

interface IAnimeProps {
  name: string;
  description: string;
  image: string;
}

export function Anime({ name, description, image }: IAnimeProps) {
  return (
    <div className="border border-black rounded">
      <Image
        src={image}
        alt="teste"
        width={360}
        height={150}
        unoptimized
      />
      <div className="
        h-32
        grid
        grid-cols-1
        gap-2
        py-5
        border-t
        p-1
        border-secound
        bg-secound
      ">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
