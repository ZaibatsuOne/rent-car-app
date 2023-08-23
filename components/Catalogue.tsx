import PopularCar from "./PopularCar";
import RecommendCars from "./RecommendCars";
import { Button } from "./ui/button";
import { FC } from "react";
import { Flex } from "@radix-ui/themes";

const Catalogue: FC = () => {
  return (
    <Flex direction="column" gap="8" pt="8">
      <PopularCar />
      <RecommendCars />
      <Flex align="center" justify="center" pt="9">
        <Button size="lg" href="/dashboard">
          Show more car
        </Button>
      </Flex>
    </Flex>
  );
};

export default Catalogue;
