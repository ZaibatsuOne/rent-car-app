"use client";
import React from "react";
import SearchBar from "./SearchBar";
import UserAccountNav from "./UserAccountNav";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <header className="py-10">
      {isLargeScreen ? (
        <nav className="flex justify-between items-start lg:items-center">
          <span className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
            <Link href="/" className="text-primary500 font-bold text-[32px]">
              MORENT
            </Link>
            {/* <SearchBar /> */}
          </span>
          {/* <UserAccountNav /> */}
        </nav>
      ) : (
        <nav className="flex flex-col gap-8">
          <span className="flex justify-between">
            <Link href="/" className="text-primary500 font-bold text-[32px]">
              MORENT
            </Link>
            {/* <UserAccountNav /> */}
          </span>
          {/* <SearchBar /> */}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
