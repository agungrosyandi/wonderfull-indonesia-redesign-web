import ImageCarouseiDesktopComponent from "./ImageCarouseiMobileComponent";

export default function ImageCarouseiMobile() {
  return (
    <div className="desktopMinWidth:hidden">
      <ImageCarouseiDesktopComponent />
    </div>
  );
}
