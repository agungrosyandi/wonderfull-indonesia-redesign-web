import { ChildrenProps } from '@/lib/type';

export default function HomeTitle({ children }: ChildrenProps) {
  return (
    <h1 className="font-DrukBoldTrial text-7xl px-10 tabletMinWidth:text-8xl">
      {children}
    </h1>
  );
}
