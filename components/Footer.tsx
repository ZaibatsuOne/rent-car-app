import { Flex, Text } from "@radix-ui/themes";

import { FC } from "react";
import FooterColumn from "./FooterColumn";
import { Separator } from "./ui/separator";
import { footerColumn as footerList } from "@/data/data";

const Footer: FC = () => {
  return (
    <>
      <Separator />
      <footer className="bg-white pb-[60px] pt-20">
        <div className="gap-9 container flex flex-col">
          <Flex
            direction="row"
            justify="between"
            gap="8"
            className="lg:flex-row lg:gap-0"
          >
            <Flex direction="column" gap="4">
              <Text
                as="span"
                weight="bold"
                size="7"
                className="text-primary500 lg:text-[32px]"
              >
                MORENT
              </Text>
              <div className="max-w-[292px]">
                <Text size="2" className="lg:text-base text-secondary400">
                  Our vision is to provide convenience and help increase your
                  sales business.
                </Text>
              </div>
            </Flex>
            <Flex wrap="wrap" gap="6">
              {footerList.map((footerItem) => (
                <FooterColumn footerItem={footerItem} />
              ))}
            </Flex>
          </Flex>
          <Separator />
          <Flex
            direction="column-reverse"
            gap="3"
            justify="between"
            className="lg:flex-row lg:gap-0 lg:text-base text-xs font-semibold"
          >
            <Text as="span">©2022 MORENT. All rights reserved</Text>
            <Flex gap="4">
              <Text as="span">Privacy & Policy</Text>
              <Text as="span">Terms & Condition</Text>
            </Flex>
          </Flex>
        </div>
      </footer>
    </>
  );
};

export default Footer;
