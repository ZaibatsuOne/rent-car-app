"use client";
import { ChangeEvent, FC } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { Slider } from "./ui/slider";
import { usePriceFilter } from "@/utils/store";

interface Props {}

const PriceFilter: FC<Props> = () => {
  const { selectedPrice, togglePrice } = usePriceFilter();

  const handlePriceFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value);
    togglePrice(newPrice);
  };

  return (
    <Flex direction="column" gap="4">
      <Text weight="medium" size="2" className="uppercase text-secondary300">
        Price
      </Text>
      <Flex direction="column" gap="2">
        <Flex gap="2" align="center">
          <input
            type="range"
            min={70}
            max={100}
            step={1}
            onChange={handlePriceFilter}
            value={selectedPrice}
            className="bg-primary500"
          />
          <Text as="span" weight="bold">
            {selectedPrice}$
          </Text>
        </Flex>
        <Text weight="bold" size="4" className="text-secondary400">
          Max. $100
        </Text>
      </Flex>
    </Flex>
  );
};

export default PriceFilter;
