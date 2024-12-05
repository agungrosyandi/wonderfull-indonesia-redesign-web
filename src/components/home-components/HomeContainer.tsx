import { ChildrenProps } from "@/lib/type";

export default function HomeContainer({ children }: ChildrenProps) {
  return (
    <section className="relative z-20 gap-3 w-full min-h-screen flex flex-col justify-center items-center text-center py-20">
      {children}
    </section>
  );
}
