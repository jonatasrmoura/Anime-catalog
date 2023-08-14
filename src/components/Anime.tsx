import Image from "next/image";
import Link from "next/link";

interface IAnimeProps {
  name: string;
  description: string;
  image: string;
}

export function Anime({ name, description, image }: IAnimeProps) {
  return (
    <div className="border border-black rounded shadow-md my-5">
      <Link 
        href={''}
      >
        <Image
          className="h-72"
          src={image}
          alt={name}
          width={1000}
          height={300}
          unoptimized
        />
      </Link>
        <div className="
          h-32
          lg:h-60
          xl:h-48
          border-t
          pl-2
          border-secound
          bg-secound
        ">
          <h4 className="text-lg font-bold py-3">{name}</h4>
          <p>{description}</p>
        </div>
    </div>
  );
}
