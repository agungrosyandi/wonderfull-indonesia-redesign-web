import { ChildrenProps } from '@/lib/type';

export default function EventsCityMainContainer({ children }: ChildrenProps) {
  return (
    <main className="relative w-full py-5 flex flex-col justify-center items-center">
      {children}
    </main>
  );
}
