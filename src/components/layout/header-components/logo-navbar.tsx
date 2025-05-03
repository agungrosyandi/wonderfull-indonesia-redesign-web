import Image from "next/image";
import Link from "next/link";

import logoWondefulIndonesia from "../../../../public/image/wonderful-indonesia-png-2.png";

export default function LogoNavbar() {
  return (
    <div className="relative w-[5rem]">
      <Link href="/">
        <div className="relative w-[100%] z-30">
          <Image src={logoWondefulIndonesia} alt="logo" />
        </div>
      </Link>
    </div>
  );
}
