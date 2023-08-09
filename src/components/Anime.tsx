import Image from "next/image";
import Link from "next/link";

interface IAnimeProps {
  name: string;
  description: string;
  image: string;
}

export function Anime({ name, description, image }: IAnimeProps) {
  return (
    <Link 
      href={''}
      className="border border-black rounded shadow-md"
    >
      <Image
        src={image}
        alt={name}
        width={1000}
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
    </Link>
  );
}
