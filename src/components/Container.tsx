import { ChildrenProps } from "@/lib/type";

export default function Container({ children }: ChildrenProps) {
  return (
    <div className="relative mx-auto flex flex-col w-screen min-h-screen">
      {children}
    </div>
  );
}
