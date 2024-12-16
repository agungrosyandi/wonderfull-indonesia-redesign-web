import Image from "next/image";
import wondefulIndonesiaPNG from "../../../public/image/wonderful-indonesia-png-1.png";
import { roboto } from "@/utils/fonts";

export default function AboutClosing() {
  return (
    <div className="relative bg-[#ffffff] px-[5%] flex gap-5 flex-col justify-center items-center text-center py-[2rem]">
      <div className="relative w-[100%] desktopMinWidth:w-[50%]">
        <Image src={wondefulIndonesiaPNG} alt="" />
      </div>
      <p
        className={`${roboto.className} text-base text-black tabletMinWidth:text-lg tabletMinWidth:px-[3rem] desktopMinWidth:px-[5rem] fullHdMinWidth:px-[20rem]`}
      >
        This is the official website of the Ministry of Tourism, Republic of
        Indonesia. The contents listed on this website are intended for
        informational purposes rather than commercial. Any displayed sale is
        meant as a token of partnership and will always redirect you to our
        partners sites.
      </p>
    </div>
  );
}
