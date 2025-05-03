"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export default function Socials() {
  return (
    <div className="relative w-full">
      <Button
        className="w-full"
        variant={"outline"}
        onClick={() => signIn("google", { redirectTo: "/" })}
      >
        <FcGoogle className="w-5 h-5" /> Sign in with google
      </Button>
    </div>
  );
}
