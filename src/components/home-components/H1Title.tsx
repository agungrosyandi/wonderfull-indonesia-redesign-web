import { ChildrenProps } from "@/lib/type";
import { poppinsFontRegular400 } from "@/utils/fonts";

export default function H1Title({ children }: ChildrenProps) {
  return (
    <h1
      className={`font-DrukBoldTrial text-black font-bold text-4xl px-10 tabletMinWidth:text-6xl desktopMinWidth:hidden`}
    >
      {children}
    </h1>
  );
}
