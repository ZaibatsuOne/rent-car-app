import CapacityFilter from "../CapacityFilter";
import TypeFilter from "../TypeFilter";
import { FC } from "react";
import { Slider } from "../ui/slider";
import { Flex, Text } from "@radix-ui/themes";

interface Props {}

const AsideNavbar: FC<Props> = () => {
  return (
    <aside className="hidden md:flex flex-col gap-14 w-60">
      <TypeFilter />
      <CapacityFilter />
      <Flex direction="column" gap="4">
        <Text weight="medium" size="2" className="uppercase text-secondary300">
          Price
        </Text>
        <Flex direction="column" gap="2">
          <Slider defaultValue={[33]} max={100} step={1} />
          <Text weight="bold" size="4" className="text-secondary400">
            Max. $100
          </Text>
        </Flex>
      </Flex>
    </aside>
  );
};

export default AsideNavbar;
