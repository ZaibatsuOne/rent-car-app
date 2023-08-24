"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UserAccountNav from "./UserAccountNav";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Flex, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const router = useRouter();

  return (
    <header className="py-10">
      {isLargeScreen ? (
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
      ) : (
        <nav className="flex flex-col gap-8">
          <Flex justify="between">
            <Link href="/">
              <Heading size="7" weight="bold" className="text-primary500">
                MORENT
              </Heading>
            </Link>
          </Flex>
          <UserAccountNav />
          <SearchBar />
        </nav>
      )}
    </header>
  );
};

export default NavBar;
