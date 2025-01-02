import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageBackground from "../../../../public/image/background-home-1.jpg";
import imageTitle from "../../../../public/image/wonderful-indonesia-png-2.png";
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

export default async function Login() {
  const session = await auth();
  console.log(session);

  const loginGoogle = async () => {
    "use server";
    await signIn("google", { redirectTo: "/dashboard" });
  };

  return (
    <section className="relative z-30 w-full h-full">
      <div className="fixed z-[-1] bg-black inset-0 w-full h-screen">
        <Image
          className="blur-md"
          src={imageBackground}
          alt="imgpng"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full min-h-[100vh] flex gap-10 flex-col justify-center items-center">
        <form
          action={loginGoogle}
          className="text-white bg-black/50 rounded-3xl p-10 flex flex-col gap-3 tabletMinWidth:p-16"
        >
          <Link href={"/"}>
            <div className="relative w-[15rem]">
              <Image src={imageTitle} alt="imgpng" width={500} height={500} />
            </div>
          </Link>

          <Input type="text" placeholder="Masukan Id" />
          <Input type="password" placeholder="Masukan Password" />
          <Button type="submit" variant={"white"}>
            <p className="text-black">Enter</p>
          </Button>

          <Button type="submit" variant={"destructive"}>
            <p className="text-black">Sign in with Google</p>
          </Button>
        </form>
      </div>
    </section>
  );
}
