import { ChildrenProps } from "@/utils/type";
import { roboto } from "@/utils/fonts";

export default function HomeDescription({ children }: ChildrenProps) {
  return <p className={`${roboto.className} text-xs text-center tabletMinWidth:text-sm`}>{children}</p>;
}
