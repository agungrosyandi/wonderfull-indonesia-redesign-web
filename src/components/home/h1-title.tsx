import { ChildrenProps } from "@/utils/type";

export default function H1Title({ children }: ChildrenProps) {
  return (
    <h1
      className={`font-bold text-2xl px-10 tabletMinWidth:text-3xl`}
    >
      {children}
    </h1>
  );
}
