import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

import { FaAngleDown } from "react-icons/fa";

export default function NavbarDesktop() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm">Explore </p>
            <MenubarShortcut>
              <FaAngleDown size={20} />
            </MenubarShortcut>
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"/list-destination/all"}>All Destination</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/under-contruction"> Popular Destination</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Event</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href="/under-contruction"> Culture</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/under-contruction">Tourist Village</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/under-contruction">Note</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm">Plant your Trip </p>
            <MenubarShortcut>
              <FaAngleDown size={20} />
            </MenubarShortcut>
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"/under-contruction"}>General Information</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href={"/e-visa"}>E-Visa</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
