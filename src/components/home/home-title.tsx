import { ADLam } from "@/utils/font";
import { ChildrenProps } from "@/utils/type";

export default function HomeTitle({ children }: ChildrenProps) {
  return (
    <h1
      className={`${ADLam.className} text-5xl text-white px-10 tabletMinWidth:text-7xl desktopMinWidth:px-0 desktopMinWidth:text-5xl fullHdMinWidth:text-6xl`}
    >
      {children}
    </h1>
  );
}
