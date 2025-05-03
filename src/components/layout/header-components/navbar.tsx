"use client";

import PublicNavbar from "./public-navbar";
import SessionsNavbar from "./sessions-navbar";
import LogoNavbar from "./logo-navbar";
import NavbarContainer from "./navbar-container";
import { ExtendUser } from "../../../../next-auth";

type NavbarProps = {
  expires?: string; // <-- Make expires optional
  user?: ExtendUser; // <-- make it optional
};

export default function Navbar({ user, expires }: NavbarProps) {
  return (
    <NavbarContainer>
      <LogoNavbar />

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-5"
      >
        <PublicNavbar />

        {/* Only show SessionsNavbar if expires (session) exists */}

        {expires && <SessionsNavbar expires={expires} user={user} />}
      </div>
    </NavbarContainer>
  );
}
