"use client";

import dynamic from "next/dynamic";
import zeroData from "../../../public/lottie/zero-data.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ZeroDataLottie() {
  return <Lottie className="h-[28rem]" loop={true} animationData={zeroData} />;
}
