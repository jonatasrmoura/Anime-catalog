import { ReactNode } from "react";

interface IContainerCardProps {
  title: string;
  colorLine: string;
  children: ReactNode;
}

export function ContainerCard({
  title,
  colorLine,
  children
}: IContainerCardProps) {
  return (
    <div className={`
      rounded-md
      px-3
      py-6
    `}>
      <div className="flex flex-col">
        <h1>{title}</h1>
        <div className={`w-16 h-2 ${colorLine}`} />
      </div>
      {children}
    </div>
  );
}
