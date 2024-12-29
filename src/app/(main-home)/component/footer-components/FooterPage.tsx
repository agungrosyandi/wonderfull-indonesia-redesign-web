"use client";

import { roboto } from "@/utils/fonts";
import Link from "next/link";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import AboutClosing from "../home-components/AboutClosing";

import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/utils/disableNavWithFooter";

const routes = [
  {
    path: "/",
    icons: <FaSquareFacebook size={30} />,
  },
  {
    path: "/",
    icons: <FaSquareTwitter size={30} />,
  },
  {
    path: "/",
    icons: <FaSquareInstagram size={30} />,
  },
  {
    path: "/",
    icons: <FaYoutube size={30} />,
  },
  {
    path: "/",
    icons: <AiFillTikTok size={30} />,
  },
];

export default function FooterPage() {
  const path = usePathname();

  const hideNavFooter = disableNavWithFooter.includes(path);

  return (
    <>
      {!hideNavFooter && (
        <section className="relative p-[5%] border-t-8 inset-0 bg-[#ffffff] z-20 w-full flex justify-center items-center">
          <div>
            <AboutClosing />
            <ul
              className={`${roboto.className} text-base text-black flex items-center justify-center gap-5 tabletMinWidth:text-lg`}
            >
              {routes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path}>{route.icons}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
