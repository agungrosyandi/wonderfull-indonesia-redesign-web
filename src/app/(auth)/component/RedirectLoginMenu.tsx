import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import imageBackground from "../../../../public/image/kuta-beach.jpg";

export default function RedirectLoginMenu() {
  return (
    <div className="relative px-[5%] w-full h-screen flex flex-col justify-center items-center text-center">
      <div className="absolute z-[-1] blur inset-0 w-full h-screen">
        <Image
          src={imageBackground}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>

      <div className="bg-black/40  p-10 rounded-3xl">
        <h1 className="relative z-30 text-white font-DrukBoldTrial text-4xl tabletMinWidth:text-5xl">
          Kamu Sedang harus <span className="text-[#f93131]">Login </span>
          terlebih dahulu
        </h1>
        <Button className="z-30 mt-[2rem]" variant={"white"}>
          <Link href={"/admin-auth"}>
            <p className="text-black">Login</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}
