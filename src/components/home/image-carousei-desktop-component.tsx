"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import imageCarousei1 from "../../../public/image/bg-main-home-2.jpg";
import imageCarousei2 from "../../../public/image/bg-main-home-3.jpg";
import imageCarousei3 from "../../../public/image/background-home-1.jpg";
import imageCarousei4 from "../../../public/image/bg-main-home-4.jpg";
import imageCarousei5 from "../../../public/image/bg-main-home-5.jpg";

export default function ImageCarouseiDesktopComponent() {
  const images = [
    { id: 1, imageCarousei: imageCarousei1 },
    { id: 2, imageCarousei: imageCarousei2 },
    { id: 3, imageCarousei: imageCarousei3 },
    { id: 4, imageCarousei: imageCarousei4 },
    { id: 5, imageCarousei: imageCarousei5 },
  ];

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={1500}
        className="w-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.imageCarousei}
              alt={`Slide ${image.id}`}
              style={{ objectFit: "cover" }}
              className="w-full h-screen"
            />
            <div className="absolute z-50 inset-0 w-full h-full bg-black/30"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
