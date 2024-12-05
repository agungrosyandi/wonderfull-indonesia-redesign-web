import { ChildrenProps } from "@/lib/type";

export default function ContentContainer({ children }: ChildrenProps) {
  return <section className="relative w-full h-full">{children}</section>;
}
