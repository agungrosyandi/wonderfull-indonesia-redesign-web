import { ChildrenProps } from "@/utils/type";

export default function H1Title({ children }: ChildrenProps) {
  return (
    <h1
      className={` text-black font-bold text-2xl px-10 tabletMinWidth:text-3xl desktopMinWidth:hidden`}
    >
      {children}
    </h1>
  );
}
