interface IInfoAnimeProps {
  title: string;
  value: string | number;
}

export function InfoAnime({ title, value }: IInfoAnimeProps) {
  return (
    <div>
      <span className="text-lg font-bold">{title}</span>
      <p>{value}</p>
    </div>
  );
}
