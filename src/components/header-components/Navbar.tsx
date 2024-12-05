"use client";

import { roboto } from "@/utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import logoWondefulIndonesia from "../../../public/image/wonderful-indonesia-png-2.png";
import NavbarMenuMobile from "./NavbarMobileMenu";

export const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Go Explore",
    path: "/events/all",
  },
];

export default function Navbar() {
  const activePathName = usePathname();

  return (
    <div className="fixed z-30 px-[5%] py-5 flex justify-between items-center w-screen h-[10vh] backdrop-blur-md bg-black/20 fullHdMinWidth:px-[10%]">
      <div className="relative w-[7rem]">
        <Link href="/">
          <div className="relative w-[100%] z-30">
            <Image src={logoWondefulIndonesia} alt="logo" />
          </div>
        </Link>
      </div>

      <ul
        className={`${roboto.className} relative hidden gap-10 text-base tabletMinWidth:text-lg desktopMinWidth:flex`}
      >
        {routes.map((route) => (
          <li
            key={route.path}
            className={clsx(
              "relative flex pb-2 h-full hover:text-white transition",
              {
                "text-white": activePathName === route.path,
                "text-white/50": activePathName !== route.path,
              }
            )}
          >
            <Link href={route.path}>{route.name}</Link>

            {activePathName === route.path && (
              <motion.div
                layoutId="header-active-link"
                className=" bg-[#f2361d] h-[0.1rem] w-full absolute -bottom-0"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>

      {/* mobile navbar menu   */}

      <NavbarMenuMobile />
    </div>
  );
}
