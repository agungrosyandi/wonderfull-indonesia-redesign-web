"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { routes } from "./Navbar";
import Link from "next/link";

export default function NavbarMenuMobile() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        onClick={handleNav}
        className="text-white z-40 block desktopMinWidth:hidden"
      >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-full h-full ease-in-out duration-500 z-20 "
            : "fixed left-[-100%] w-full h-full ease-in-out duration-1500 opacity-0"
        }
      >
        <ul className="text-lg w-full h-screen text-white p-4 uppercase flex flex-col justify-center items-center gap-y-5">
          {routes.map((route) => (
            <li
              className="border-b border-[#fa2a2a] p-5 text-base tabletMinWidth:text-2xl"
              key={route.path}
            >
              <Link onClick={handleNav} href={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-screen h-screen bg-black/90 ease-in-out duration-500 "
            : "fixed"
        }
      ></div>
    </>
  );
}
