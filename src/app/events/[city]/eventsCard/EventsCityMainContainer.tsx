import { ChildrenProps } from '@/lib/type';

export default function EventsCityMainContainer({ children }: ChildrenProps) {
  return (
    <main className="relative w-full min-h-[80vh] py-[15vh] px-[5%] flex flex-col justify-center items-center fullHdMinWidth:px-[10%]">
      {children}
    </main>
  );
}
