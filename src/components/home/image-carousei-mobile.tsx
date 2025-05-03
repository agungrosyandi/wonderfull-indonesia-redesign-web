import ImageCarouseiDesktopComponent from "./image-carousei-mobile-component";

export default function ImageCarouseiMobile() {
  return (
    <div className="desktopMinWidth:hidden">
      <ImageCarouseiDesktopComponent />
    </div>
  );
}
