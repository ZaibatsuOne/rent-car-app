"use client";
import { ICar } from "@/types/types";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import StarRating from "../ui/StarRating";
import AddFavorite from "../ui/AddFavorite";
import { useAddFavorite } from "@/utils/store";

interface Props {
  car: ICar;
}

const DescriptionSection: FC<Props> = ({ car }) => {
  const { capacity, name, price, type, description, gas } = car;
  const footerCard = [
    {
      title: "Type Car",
      value: type,
    },
    {
      title: "Capacity",
      value: capacity,
      subtitle: "Person",
    },
    {
      title: "Steering",
      value: "Manual",
    },
    {
      title: "Gasoline",
      value: gas,
      subtitle: "L",
    },
  ];

  const favoriteList = useAddFavorite((state) => state.favoriteList);
  return (
    <Flex direction="column" gap="7">
      <Flex justify="between" align="start">
        <Flex className="flex flex-col gap-2">
          <Heading size="8" weight="bold" className="text-secondary500">
            {name}
          </Heading>
          <Flex align="center" gap="2">
            <StarRating car={car} />
            <Text
              as="span"
              weight="medium"
              size="2"
              className="text-secondary400"
            >
              440+ Reviewer
            </Text>
          </Flex>
        </Flex>
        <AddFavorite car={car} />
      </Flex>
      <Text size="5" className=" text-secondary400">
        {description}
      </Text>
      <div>
        {favoriteList.map((item) => (
          <span>{item.name}</span>
        ))}
      </div>
      <Flex direction="column" className="gap-16">
        <Grid columns="2" gap="4">
          {footerCard.map((param) => (
            <Flex justify="between" className="text-xl">
              <Text as="span" className="text-secondary300">
                {param.title}
              </Text>
              <Text
                as="span"
                className="capitalize font-semibold text-secondary400"
              >
                {param.value} {param.subtitle}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Flex justify="between" align="center">
          <div className="font-bold">
            <Text as="span" size="7" className="text-secondary500">
              ${price}.00/ 
            </Text>
            <Text as="span" className="text-secondary300">
              days
            </Text>
          </div>
          <Button size="lg">Rent Now</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DescriptionSection;
