import Image from "next/image";
import imageBackground from "../../../../../../public/image/bg-main-home-4.jpg";

export default function ImageBackgroundListDestination() {
  return (
    <div className="fixed z-[-1] inset-0 w-full h-screen">
      <Image
        src={imageBackground}
        alt="imgpng"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute z-50 inset-0 w-full h-full bg-black/30 desktopMinWidth:bg-black/50"></div>
    </div>
  );
}
