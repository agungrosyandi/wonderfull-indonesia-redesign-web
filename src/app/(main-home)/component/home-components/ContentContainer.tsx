import { ChildrenProps } from "@/utils/type";

export default function ContentContainer({ children }: ChildrenProps) {
  return <section className="relative w-full h-full">{children}</section>;
}
