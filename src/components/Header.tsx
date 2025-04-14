import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import LogOutButton from "./LogoutButton";
import { getuser } from "@/auth/sever";
import { SidebarTrigger } from "./ui/sidebar";

async function Header() {
  const user = await getuser();
  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <SidebarTrigger className="absolute left-1 top-1" />
      <Link href={"/"} className="flex items-end gap-2">
        <Image
          src={"/logo1.png"}
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          AI <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4 ">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href="/sign-up">Signup</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
