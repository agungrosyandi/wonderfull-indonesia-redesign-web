import { BackButtonTypeProps } from "@/utils/type";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BackButton({ href, label }: BackButtonTypeProps) {
  return (
    <Button className="relative w-full" variant={"link"}>
      <Link className="w-full" aria-label={label} href={href}>
        {label}
      </Link>
    </Button>
  );
}
