import { ChildrenProps } from "@/utils/type";

export default function CardAuthParent({ children }: ChildrenProps) {
  return <div className="flex flex-col flex-1">{children}</div>;
}
