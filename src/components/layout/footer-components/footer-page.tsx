"use client";

import Link from "next/link";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/utils/disable-nav-footer";
import AboutClosing from "@/components/home/about-closing";
import { roboto } from "@/utils/font";

const routes = [
  {
    id: 1,
    path: "/",
    icons: <FaSquareFacebook size={30} />,
  },
  {
    id: 2,
    path: "/",
    icons: <FaSquareTwitter size={30} />,
  },
  {
    id: 3,
    path: "/",
    icons: <FaSquareInstagram size={30} />,
  },
  {
    id: 4,
    path: "/",
    icons: <FaYoutube size={30} />,
  },
  {
    id: 5,
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
        <section className="relative p-[5%] inset-0 z-20 w-full flex justify-center items-center">
          <div>
            <AboutClosing />
            <ul
              className={`${roboto.className} text-base flex items-center justify-center gap-5 tabletMinWidth:text-lg`}
            >
              {routes.map((route) => (
                <li key={route.id}>
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
