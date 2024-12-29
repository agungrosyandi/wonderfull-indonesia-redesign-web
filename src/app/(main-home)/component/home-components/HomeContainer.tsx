import { ChildrenProps } from "@/utils/type";

export default function HomeContainer({ children }: ChildrenProps) {
  return (
    <section className="relative z-20 gap-3 w-full min-h-screen flex flex-col justify-center items-center text-center py-20 desktopMinWidth:gap-5 desktopMinWidth:items-start desktopMinWidth:px-[5%] fullHdMinWidth:px-[10%]">
      {children}
    </section>
  );
}
