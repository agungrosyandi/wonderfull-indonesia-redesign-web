import { ChildrenProps } from "@/utils/type";

export default function GridContainer({ children }: ChildrenProps) {
  return (
    <div className="grid grid-cols-6 grid-flow-row gap-5">{children}</div>
  );
}
