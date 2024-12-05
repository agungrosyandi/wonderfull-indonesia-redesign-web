import { ChildrenProps } from "@/lib/type";
import { roboto } from "@/utils/fonts";

export default function HomeDescription({ children }: ChildrenProps) {
  return <p className={`${roboto.className} text-base px-10 tabletMinWidth:text-lg`}>{children}</p>;
}
