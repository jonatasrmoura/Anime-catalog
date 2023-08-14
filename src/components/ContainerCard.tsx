import { ReactNode } from "react";

interface IContainerCardProps {
  title: string;
  colorLine: string;
  id?: string;
  children: ReactNode;
}

export function ContainerCard({
  title,
  colorLine,
  children,
  id
}: IContainerCardProps) {
  return (
    <div className={`
      rounded-md
      px-3
      py-6
    `}>
      <div className="flex flex-col" id={id}>
        <h1>{title}</h1>
        <div className={`w-16 h-2 ${colorLine}`} />
      </div>
      {children}
    </div>
  );
}
