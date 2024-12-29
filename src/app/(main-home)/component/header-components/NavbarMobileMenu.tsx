"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavbarMenuMobileTitle,
  NavbarMenuMobileSubTitle,
} from "./NavbarMenuMobileTitle";

import { goExplore, plantYourTrip } from "./NavbarMobileMap";

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
        <div className="w-full h-screen p-4 uppercase flex flex-col justify-center items-center gap-y-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <NavbarMenuMobileTitle>Go Explore</NavbarMenuMobileTitle>
              </AccordionTrigger>
              <AccordionContent>
                <NavbarMenuMobileSubTitle>
                  {goExplore.map((route) => (
                    <div
                      key={route.id}
                      className="text-xs tabletMinWidth:text-base"
                    >
                      <Link onClick={handleNav} href={route.path}>
                        {route.name}
                      </Link>
                    </div>
                  ))}
                </NavbarMenuMobileSubTitle>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <NavbarMenuMobileTitle>Plant your trip</NavbarMenuMobileTitle>
              </AccordionTrigger>
              <AccordionContent>
                <NavbarMenuMobileSubTitle>
                  {plantYourTrip.map((route) => (
                    <div
                      key={route.id}
                      className="text-xs tabletMinWidth:text-base"
                    >
                      <Link onClick={handleNav} href={route.path}>
                        {route.name}
                      </Link>
                    </div>
                  ))}
                </NavbarMenuMobileSubTitle>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
