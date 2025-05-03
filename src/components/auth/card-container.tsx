import { ChildrenProps } from "@/utils/type";

export default function CardContainer({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col desktopMinWidth:flex-row ">{children}</div>
  );
}
