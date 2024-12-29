import { ChildrenProps } from "@/utils/type";

export default function ListDestinationMainContainer({
  children,
}: ChildrenProps) {
  return (
    <main className="relative w-full min-h-[80vh] py-[15vh] px-[5%] flex gap-10 flex-col justify-center items-center fullHdMinWidth:px-[10%]">
      {children}
    </main>
  );
}
