"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

import imageEvisa from "../../../public/image/page-3-pic-1.jpg";
import imageGeneralInformation from "../../../public/image/page-3-pic-2.jpg";
import H1Title from "./h1-title";
import Description from "../reusable/description";

export default function TravelGuildeCarousei() {
  const travelGuideCraousei = [
    {
      id: 1,
      image: imageEvisa,
      title: "E-Visa",
      description:
        "Make sure to learn about all the immigration requirements that should be fulfilled before visiting Indonesia, including e-passport and e-visa.",
      button: "More detail",
      link: "general-information/e-visa",
    },
    {
      id: 2,
      image: imageGeneralInformation,
      title: "General Information",
      description:
        "Find everything you need to know about how to get here, what regulations that should be noted, and many other things vital in arranging your travel plan",
      button: "More detail",
      link: "/under-contruction",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center desktopMinWidth:px-[5%] fullHdMinWidth:px-[10%]">
      <H1Title>
        <span className="text-black">Travel Guide</span>
      </H1Title>

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
        {travelGuideCraousei.map((travel) => (
          <SwiperSlide key={travel.id}>
            <div className="relative">
              <div className="flex flex-1 flex-col shadow-xl desktopMinWidth:flex-row">
                <div className="relative flex-1 w-full shadow-xl">
                  <Image
                    src={travel.image}
                    alt={`Slide ${travel.id}`}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute z-50 inset-0 w-full h-full"></div>
                </div>

                <div className="flex flex-1 flex-col justify-center items-center gap-5 p-10 desktopMinWidth:justify-center desktopMinWidth:px-32">
                  <h1 className="text-xl font-bold tabletMinWidth:text-3xl">
                    {travel.title}
                  </h1>
                  <Description>{travel.description}</Description>
                  <Link href={travel.link}>
                    <Button variant={"white"}>
                      <FaArrowRight /> {travel.button}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
