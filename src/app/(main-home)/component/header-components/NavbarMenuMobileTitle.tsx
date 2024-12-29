import { ChildrenProps } from "@/utils/type";

export function NavbarMenuMobileTitle({ children }: ChildrenProps) {
  return <p className="flex items-center justify-center w-full text-xl tabletMinWidth:text-3xl">{children}</p>;
}

export function NavbarMenuMobileSubTitle({ children }: ChildrenProps) {
  return (
    <p className="flex flex-col gap-5 w-full justify-center items-center">
      {children}
    </p>
  );
}
