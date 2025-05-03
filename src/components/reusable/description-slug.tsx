import { roboto } from "@/utils/font";
import { ChildrenProps } from "@/utils/type";

export default function DescriptionSlug({ children }: ChildrenProps) {
  return (
    <div
      className={`${roboto.className} text-xs text-start tabletMinWidth:text-sm tabletMinWidth:flex-1`}
    >
      {children}
    </div>
  );
}
