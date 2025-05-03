import { ChildrenProps } from "@/utils/type";

export default function AuthContainer({ children }: ChildrenProps) {
  return <section className="relative z-30 w-full h-full">{children}</section>;
}
