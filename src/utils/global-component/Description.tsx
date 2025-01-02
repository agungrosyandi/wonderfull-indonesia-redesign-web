import { ChildrenProps } from "../type";
import { roboto } from "@/utils/fonts";

export default function Description({ children }: ChildrenProps) {
  return (
    <p className={`${roboto.className} text-xs text-center tabletMinWidth:text-sm`}>
      {children}
    </p>
  );
}
