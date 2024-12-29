import { ChildrenProps } from "@/utils/type";
import { ADLam } from "@/utils/fonts";

export default function HomeTitle({ children }: ChildrenProps) {
  return (
    <h1
      className={`${ADLam.className} text-5xl px-10 tabletMinWidth:text-7xl desktopMinWidth:px-0 desktopMinWidth:text-6xl fullHdMinWidth:text-7xl`}
    >
      {children}
    </h1>
  );
}