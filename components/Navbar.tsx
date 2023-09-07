import { Flex, Heading } from "@radix-ui/themes";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { Separator } from "./ui/separator";
import UserAccountNav from "./UserAccountNav";

const NavBar = () => {
  return (
    <header className="flex flex-col gap-0 bg-white">
      <nav className="lg:items-center container flex items-start justify-between py-10">
        <Link href="/">
          <Heading size="7" weight="bold" className="text-primary500">
            MORENT
          </Heading>
        </Link>
        <span className="hidden lg:block max-w-[600px] w-full">
          <SearchBar />
        </span>
        <UserAccountNav />
      </nav>

      <Separator />
    </header>
  );
};

export default NavBar;
