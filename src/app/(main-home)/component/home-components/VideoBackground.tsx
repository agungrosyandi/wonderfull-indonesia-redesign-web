import ImageCarouseiDesktop from "./ImageCarouseiDesktop";
import ImageCarouseiMobile from "./ImageCarouseiMobile";

export default function VideoBackground() {
  return (
    <div className="absolute z-[-1] inset-0 w-full h-full">
      <ImageCarouseiMobile />
      <ImageCarouseiDesktop />

      {/* <video
        className="hidden desktopMinWidth:flex relative w-full h-full shadow-xl object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src="https://cdn.pixabay.com/video/2024/07/03/219241_large.mp4"
        autoPlay
        loop
        muted
      /> */}
    </div>
  );
}
