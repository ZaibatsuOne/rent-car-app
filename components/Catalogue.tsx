import PopularCar from "./PopularCar";
import RecommendCars from "./RecommendCars";
import { Button } from "./ui/button";
import { FC } from "react";
import { Flex } from "@radix-ui/themes";
import { ICar } from "@/types/types";

interface Props {
  cars: ICar[];
}

const Catalogue: FC<Props> = ({ cars }) => {
  return (
    <Flex direction="column" gap="8" pt="8">
      <PopularCar cars={cars} />
      <RecommendCars cars={cars} />
      <Flex align="center" justify="center" pt="9">
        <Button size="lg" href="/dashboard">
          Show more car
        </Button>
      </Flex>
    </Flex>
  );
};

export default Catalogue;
