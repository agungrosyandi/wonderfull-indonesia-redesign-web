import Image from "next/image";
import imageBackground from "../../../public/image/background-home-1.jpg";

export default function LoginFormBackgroundImage() {
  return (
    <div className="fixed z-[-1] bg-black inset-0 w-full h-screen">
      <Image
        className="blur-md"
        src={imageBackground}
        alt="imgpng"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
