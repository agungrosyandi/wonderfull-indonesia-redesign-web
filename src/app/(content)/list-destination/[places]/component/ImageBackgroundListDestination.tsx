import Image from "next/image";
import imageBackground from "../../../../../../public/image/bg-main-home-4.jpg";

export default function ImageBackgroundListDestination() {
  return (
    <div className="fixed bg-black z-[1] inset-0 w-full h-screen">
      <Image
        src={imageBackground}
        alt="imgpng"
        fill
        style={{ objectFit: "cover" }}
        className="blur-lg"
      />
    </div>
  );
}
