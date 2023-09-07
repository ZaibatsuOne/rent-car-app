import { Flex, Grid, Heading, Text } from "@radix-ui/themes";

import AddFavorite from "../ui/AddFavorite";
import { Button } from "../ui/button";
import { FC } from "react";
import { ICar } from "@/types/types";
import StarRating from "../ui/StarRating";

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

  // const favoriteList = useAddFavorite((state) => state.favoriteList);
  return (
    <Flex direction="column" className="rounded-xl sm:gap-7 gap-4 p-6 bg-white">
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
      <Text className=" text-secondary400 sm:text-base text-xs">
        {description}
      </Text>

      <Flex direction="column" className="gap-16">
        <Grid columns="2" gap="4">
          {footerCard.map((param) => (
            <Flex justify="between" className="text-xl">
              <Text
                as="span"
                className="text-secondary300 sm:text-base text-xs"
              >
                {param.title}
              </Text>
              <Text
                as="span"
                className="text-secondary400 sm:text-base text-xs font-semibold capitalize"
              >
                {param.value} {param.subtitle}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Flex justify="between" align="center">
          <div className="font-bold">
            <Text as="span" className="text-secondary500 text-xl">
              ${price}.00/ 
            </Text>
            <Text as="span" className="text-secondary300 sm:text-base text-xs">
              days
            </Text>
          </div>
          <Button size="lg" href={`/billing/${car.id}`}>
            Rent Now
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DescriptionSection;
