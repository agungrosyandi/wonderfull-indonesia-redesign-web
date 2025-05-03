"use client";

import { Session } from "next-auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  CircleFadingPlus,
  LayoutDashboard,
  LogOut,
  PlaneTakeoff,
  Settings,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ExtendUser } from "../../../../next-auth";

type SessionsNavbarProps = {
  expires?: string; // Make expires optional
  user?: ExtendUser; // Make user optional
};

export default function SessionsNavbar({ user }: SessionsNavbarProps) {
  const router = useRouter();

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Avatar>
            {user?.image && <Image src={user.image} alt={user.name!} fill />}
            {!user?.image && (
              <AvatarFallback>
                <div className="font-bold text-xs">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              </AvatarFallback>
            )}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-6" align="end">
          <div className="mb-4 p-4 gap-1 flex flex-col items-center bg-primary-50">
            {user?.image && (
              <Image
                className=" rounded-full"
                src={user.image}
                alt={user.name!}
                width={36}
                height={36}
              />
            )}
            {!user?.image && (
              <div className="font-bold text-xs border p-3 rounded-full">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <p className="text-xs">{user?.name}</p>
            <span className="text-xs font-medium text-secondary-foreground">
              {user?.email}
            </span>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              router.push("/dashboard/main-dashboard");
            }}
            className="group text-xs cursor-pointer transition-all duration-500"
          >
            <LayoutDashboard
              size={15}
              className="mr-3 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              router.push("/dashboard/list-destination");
            }}
            className="group text-xs cursor-pointer transition-all duration-500"
          >
            <PlaneTakeoff
              size={15}
              className="mr-3 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
            List Destination
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              router.push("/dashboard/settings");
            }}
            className="group text-xs cursor-pointer transition-all duration-500"
          >
            <Settings
              size={15}
              className="mr-3 group-hover:rotate-180 transition-all duration-300 ease-in-out"
            />
            Setting
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => signOut()}
            className=" focus:bg-destructive/50 py-2 group text-xs cursor-pointer transition-all duration-500"
          >
            <LogOut
              size={15}
              className="mr-3 group-hover:scale-75 transition-all duration-300 ease-in-out"
            />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
