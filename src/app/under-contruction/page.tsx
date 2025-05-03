import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import bgImage from "../../../public/image/wonderful-indonesia-png-1.png";
import ComingSoon from "@/components/lottie-file-motion/coming-soon-lottie";

export default function page() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-[100vh] px-[5%]">
      <div className="w-full z-10 gap-5 h-full flex flex-col justify-center items-center text-center tabletMinWidth:gap-10 ">
        <ComingSoon />
        <Button variant={"outline"}>
          <Link href={"/"}> Back to main menu</Link>
        </Button>
      </div>
    </section>
  );
}
