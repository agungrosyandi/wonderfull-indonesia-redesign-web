"use client";

import dynamic from "next/dynamic";
import comingSoon from "../../../public/lottie/cooming-soon.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ComingSoon() {
  return (
    <Lottie className="h-[20rem]" loop={true} animationData={comingSoon} />
  );
}
