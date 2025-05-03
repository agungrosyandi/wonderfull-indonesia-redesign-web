import { roboto } from "@/utils/font";
import { ChildrenProps } from "@/utils/type";

export default function Description({ children }: ChildrenProps) {
  return (
    <p
      className={`${roboto.className} text-center`}
    >
      {children}
    </p>
  );
}
