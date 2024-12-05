import Image from "next/image";
import imageBackground from "../../public/image/background-home-mobile-4.jpg";

export default function VideoBackground() {
  return (
    <div className="absolute z-[-1] inset-0 w-full h-full">
      <Image
        className="z-0 object-cover desktopMinWidth:hidden"
        src={imageBackground}
        alt="image"
        fill
        quality={50}
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority
      />

      <video
        className="hidden desktopMinWidth:flex relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src="https://cdn.pixabay.com/video/2024/07/03/219241_large.mp4"
        autoPlay
        loop
        muted
      />

      <div className="absolute z-50 inset-0 w-full h-full bg-black/30 desktopMinWidth:bg-black/50">

      </div>
    </div>
  );
}
