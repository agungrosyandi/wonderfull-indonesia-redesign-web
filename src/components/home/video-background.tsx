import ImageCarouseiDesktop from "./image-carousei-desktop";
import ImageCarouseiMobile from "./image-carousei-mobile";

export default function VideoBackground() {
  return (
    <div className="absolute z-[-1] inset-0 w-full h-full desktopMinWidth:shadow-xl">
      <ImageCarouseiMobile />
      {/* <ImageCarouseiDesktop /> */}

      <video
        className="hidden desktopMinWidth:flex relative w-full h-full object-cover left-0 right-0 top-0 bottom-0 z-[2] "
        width={1000}
        height={1000}
        src="/video/output_1.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
}
