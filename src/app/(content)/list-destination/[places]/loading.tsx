import Image from "next/image";

import spinnerLoading from "../../../../../public/svg/spinner.svg";

export default function Loading() {
  return (
    <div className="relative w-full h-full col-span-6">
      <div className="flex flex-row justify-center items-center gap-2">
        <Image src={spinnerLoading} alt="loading" width={50} height={50} />
        <p className="text-xl">loading tunggu ....</p>
      </div>
    </div>
  );
}
