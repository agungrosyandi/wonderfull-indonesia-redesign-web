import Image from "next/image";
import image1 from "../../../public/image/page-2-pic-1.jpg";
import image2 from "../../../public/image/page-2-pic-2.jpg";
import image3 from "../../../public/image/page-2-pic-3.jpg";
import image4 from "../../../public/image/page-2-pic-4.jpg";
import image5 from "../../../public/image/page-2-pic-5.jpg";
import image6 from "../../../public/image/page-2-pic-6.jpg";

import travelGuideImage1 from "../../../public/image/page-3-pic-1.jpg";
import travelGuideImage2 from "../../../public/image/page-3-pic-2.jpg";

export const TravelGuideImage1 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={travelGuideImage1}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export const TravelGuideImage2 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={travelGuideImage2}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export const Image1 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={image1}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export const Image2 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={image2}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export const Image3 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={image3}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export const Image4 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={image4}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export const Image5 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={image5}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export const Image6 = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="pic"
        src={image6}
        placeholder="blur"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
