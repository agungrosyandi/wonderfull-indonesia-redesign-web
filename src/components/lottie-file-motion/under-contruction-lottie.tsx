"use client";

import dynamic from "next/dynamic";
import underCountruction from "../../../public/lottie/under-contruction.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function UnderContructionLottie() {
  return (
    <Lottie
      className="h-[28rem]"
      loop={true}
      animationData={underCountruction}
    />
  );
}
