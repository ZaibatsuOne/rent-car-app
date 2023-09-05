import SearchBar from "./SearchBar";
import UserAccountNav from "./UserAccountNav";
import Link from "next/link";
import { Flex, Heading } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <header className="py-10">
      <nav className="flex justify-between items-start lg:items-center">
        <Flex
          direction="column"
          gap="8"
          align="start"
          className="lg:flex-row lg:gap-16 lg:items-center"
        >
          <Link href="/">
            <Heading size="7" weight="bold" className="text-primary500">
              MORENT
            </Heading>
          </Link>
        </Flex>
        <SearchBar />
        <UserAccountNav />
      </nav>
    </header>
  );
};

export default NavBar;
