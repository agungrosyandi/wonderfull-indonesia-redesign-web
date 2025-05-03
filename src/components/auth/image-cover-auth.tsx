import Image from "next/image";
import bgLogo from "../../../public/image/wonderful-indonesia-png-2.png";
import Link from "next/link";

export default function ImageCoverAuth() {
  return (
    <div className="relative hidden desktopMinWidth:flex-1 desktopMinWidth:flex desktopMinWidth:px-[2rem] desktopMinWidth:items-center desktopMinWidth:h-[30rem]">
      <Link href={"/"}>
        <Image
          src={bgLogo}
          alt=""
          width={1000}
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
}
