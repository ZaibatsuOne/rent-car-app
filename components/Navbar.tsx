import React from "react";
import SearchBar from "./SearchBar";
import UserAccountNav from "./UserAccountNav";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="py-10">
      <nav className="flex justify-between items-center">
        <div className="flex gap-16 items-center">
          <Link href="/" className="text-primary500 font-bold text-[32px]">
            MORENT
          </Link>
          <SearchBar />
        </div>
        <UserAccountNav />
      </nav>
    </header>
  );
};

export default NavBar;
