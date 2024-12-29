import { ChildrenProps } from "@/utils/type";

export default function H1CreatePost({ children }: ChildrenProps) {
  return (
    <h1 className="text-2xl text-black flex items-center justify-center font-bold">
      {children}
    </h1>
  );
}
