import FooterColumn from "./FooterColumn";
import { FC } from "react";
import { footerColumn as footerList } from "@/data/data";
import { Flex, Text } from "@radix-ui/themes";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-9 pb-[60px] pt-20 mt-14">
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
              Our vision is to provide convenience and help increase your sales
              business.
            </Text>
          </div>
        </Flex>
        <Flex wrap="wrap" gap="6">
          {footerList.map((footerItem) => (
            <FooterColumn footerItem={footerItem} />
          ))}
        </Flex>
      </Flex>
      <div className="w-full h-[1px] bg-secondary500" />
      <Flex
        direction="column-reverse"
        gap="3"
        justify="between"
        className="lg:flex-row lg:gap-0 text-xs lg:text-base font-semibold"
      >
        <Text as="span">©2022 MORENT. All rights reserved</Text>
        <Flex gap="4">
          <Text as="span">Privacy & Policy</Text>
          <Text as="span">Terms & Condition</Text>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
