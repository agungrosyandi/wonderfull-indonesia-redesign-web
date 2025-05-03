import { ChildrenProps } from "@/utils/type";
import React from "react";

export default function NavbarContainer({ children }: ChildrenProps) {
  return (
    <div className="fixed z-30 px-[5%] py-5 flex justify-between items-center w-screen h-[10vh] backdrop-blur-md bg-black/50 fullHdMinWidth:px-[10%]">
      {children}
    </div>
  );
}
