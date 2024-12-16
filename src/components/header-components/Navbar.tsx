"use client";

import Link from "next/link";
import Image from "next/image";
import logoWondefulIndonesia from "../../../public/image/wonderful-indonesia-png-2.png";
import NavbarMenuMobile from "./NavbarMobileMenu";
import NavbarDesktop from "./NavbarDesktop";

import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/utils/disableNavWithFooter";

export default function Navbar() {
  const path = usePathname();

  const hideNavFooter = disableNavWithFooter.includes(path);

  return (
    <>
      {!hideNavFooter && (
        <div className="fixed z-30 px-[5%] py-5 flex justify-between items-center w-screen h-[10vh] backdrop-blur-md bg-black/50 fullHdMinWidth:px-[10%]">
          <div className="relative w-[7rem]">
            <Link href="/">
              <div className="relative w-[100%] z-30">
                <Image src={logoWondefulIndonesia} alt="logo" />
              </div>
            </Link>
          </div>
          <NavbarDesktop />
          <NavbarMenuMobile />
        </div>
      )}
    </>
  );
}
