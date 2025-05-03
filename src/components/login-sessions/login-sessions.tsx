"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageBackground from "../../../public/image/borobudur-temple.jpg";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function LoginSessions({ user }: Session) {
  return (
    <div className="relative px-[5%] w-full h-screen flex flex-col justify-center items-center text-center">
      <div className="fixed bg-black z-[1] inset-0 w-full h-screen">
        <Image
          src={imageBackground}
          alt="imgpng"
          fill
          style={{ objectFit: "cover" }}
          className="blur-lg"
        />
      </div>
      <h1 className="relative z-30 text-white text-3xl tabletMinWidth:text-5xl">
        Kamu Sedang <span className="text-[#78ea26]">Login</span>
      </h1>

      <div className="z-30 mt-5 flex gap-4 flex-col items-center tabletMinWidth:flex-row">
        <Button className="z-30" variant={"secondary"}>
          <Link href={"/"}>Back to Main Home ? </Link>
        </Button>
        <h1 className="text-[#ffffff]">or</h1>
        <Button
          onClick={() => signOut({ redirectTo: "/auth/login" })}
          className="z-30"
          variant={"destructive"}
        >
          Log out sessions ?
        </Button>
      </div>
    </div>
  );
}
