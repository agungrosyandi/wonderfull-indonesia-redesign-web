"use client";

import { cn } from "@/utils/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav({
  allLinks,
}: {
  allLinks: { id: number; label: string; path: string; icon: JSX.Element }[];
}) {
  const pathName = usePathname();

  return (
    <nav className="mt-[15vh] mb-10 w-[95vw] mx-auto fullHdMinWidth:w-[90vw]">
      <ul className="flex justify-center gap-5 text-xs tabletMinWidth:gap-10">
        <AnimatePresence>
          {allLinks.map((link) => (
            <motion.li whileTap={{ scale: 0.9 }} key={link.id}>
              <Link
                className={cn(
                  "relative flex flex-col items-center gap-5",
                  pathName === link.path && "text-primary"
                )}
                href={link.path}
              >
                {link.icon}
                {link.label}
                {pathName === link.path ? (
                  <motion.div
                    className="h-[2px] w-full rounded-full absolute bg-primary z-0 left-0 -bottom-3"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 35 }}
                  />
                ) : null}
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
