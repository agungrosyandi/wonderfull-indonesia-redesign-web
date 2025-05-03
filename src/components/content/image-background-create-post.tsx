import Image from "next/image";
import React from "react";

import imageBackground from "../../../public/image/background-home-1.jpg";

export default function ImageBackgroundCreatePost() {
  return (
    <div className="hidden fixed left-[55%] w-full h-screen desktopMinWidth:block">
      <Image
        src={imageBackground}
        alt="imgpng"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
