import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageBackground from "../../../../public/image/borobudur-temple.jpg";
import Link from "next/link";
import { auth } from "../../../../server/auth";

export default async function Secret() {
  const session = await auth();

  if (!session) return redirect("/auth/login");

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
      <h1 className="relative z-30 text-white font-DrukBoldTrial text-7xl tabletMinWidth:text-8xl">
        Kamu Sedang <span className="text-[#78ea26]">Login</span>
      </h1>
      <Button className="z-30 mt-[1rem]" variant={"link"}>
        <Link href={"/"}>Back to Main Home</Link>
      </Button>
    </div>
  );
}
