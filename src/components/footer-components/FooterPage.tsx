import { roboto } from "@/utils/fonts";
import Link from "next/link";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const routes = [
  {
    path: "/terms-conditions",
    icons: <FaSquareFacebook size={30} />,
  },
  {
    path: "/terms-conditions",
    icons: <FaSquareTwitter size={30} />,
  },
  {
    path: "/terms-conditions",
    icons: <FaSquareInstagram size={30} />,
  },
  {
    path: "/terms-conditions",
    icons: <FaYoutube size={30} />,
  },
  {
    path: "/terms-conditions",
    icons: <AiFillTikTok size={30} />,
  },
];

export default function FooterPage() {
  return (
    <section className="relative px-[5%] inset-0 bg-white z-20 w-full h-[10vh] flex justify-center items-center">
      <ul
        className={`${roboto.className} text-base text-black flex gap-5 tabletMinWidth:text-lg`}
      >
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.icons}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
