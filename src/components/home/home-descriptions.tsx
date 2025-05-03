import { roboto } from "@/utils/font";
import { ChildrenProps } from "@/utils/type";

export default function HomeDescription({ children }: ChildrenProps) {
  return (
    <p className={`${roboto.className} text-white text-center`}>{children}</p>
  );
}
