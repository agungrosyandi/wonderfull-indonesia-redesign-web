import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageBackground from "../../../../public/image/background-home-1.jpg";
import imageTitle from "../../../../public/image/wonderful-indonesia-png-2.png";

export default function Login() {
  return (
    <section className="relative w-full h-full">
      <div className="fixed z-[-1] inset-0 w-full h-screen">
        <Image
          src={imageBackground}
          alt="imgpng"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 w-full h-screen bg-black/30"></div>
      </div>
      <div className="w-full min-h-[100vh] flex gap-10 flex-col justify-center items-center">
        <form
          action=""
          className="text-white bg-black/50 rounded-3xl p-10 flex flex-col gap-3 tabletMinWidth:p-16"
        >
          <div className="relative w-[15rem]">
            <Image src={imageTitle} alt="imgpng" width={500} height={500} />
          </div>
          <Input type="text" placeholder="Masukan Id" />
          <Input type="password" placeholder="Masukan Password" />
          <Button type="submit" variant={"white"}>
            <p className="text-black">Enter</p>{" "}
          </Button>
        </form>
      </div>
    </section>
  );
}
