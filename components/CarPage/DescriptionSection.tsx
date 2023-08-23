import { ICar } from "@/types/types";
import { Heart, Star } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";

interface Props {
  car: ICar;
}

const DescriptionSection: FC<Props> = ({ car }) => {
  const { capacity, name, price, type, priority, gas } = car;
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
  return (
    <Flex direction="column" gap="7">
      <Flex justify="between" align="start">
        <Flex className="flex flex-col gap-2">
          <Heading size="8" weight="bold" className="text-secondary500">
            {name}
          </Heading>
          <Flex align="center" gap="2">
            <Flex gap="1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </Flex>
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
        <Heart className="mt-2" />
      </Flex>
      <Text size="5" className=" text-secondary400">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </Text>
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
