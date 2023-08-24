"use client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Fuel, Heart, LifeBuoy, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ICar } from "@/types/types";
import { useMediaQuery } from "react-responsive";
import { Box, Flex, Text } from "@radix-ui/themes";
import AddFavorite from "./AddFavorite";

interface Props {
  car: ICar;
}
const CarCard: FC<Props> = ({ car }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const carParams = [
    {
      icon: Fuel,
      value: car.gas,
    },
    {
      icon: LifeBuoy,
      value: "Manual",
    },
    {
      icon: Users,
      value: car.capacity,
      subtitle: "People",
    },
  ];
  return (
    <Card className="flex flex-col shadow-xl min-h-[403px]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <Text className="whitespace-nowrap">{car.name}</Text>
          <AddFavorite car={car} />
        </CardTitle>
        <CardDescription>
          <Text className="font-bold text-secondary300 capitalize">
            {car.type}
          </Text>
        </CardDescription>
      </CardHeader>
      {isLargeScreen ? (
        <CardContent className="relative flex items-center justify-center py-10 flex-grow">
          <Image src={car.image} width={220} height={68} alt="car" />
          <div className="absolute bg-gradient-to-t from-white w-[220px] h-5 bottom-10" />
        </CardContent>
      ) : (
        <CardContent className="relative flex items-center justify-between py-10 flex-grow">
          <Box>
            <Image src={car.image} width={166} height={68} alt="car" />
            <div className="absolute bg-gradient-to-t from-white w-[150px] lg:w-[220px] h-5 bottom-10" />
          </Box>
          <div className="flex flex-col gap-4 items-start text-[12px] text-secondary300">
            {carParams.map((param) => (
              <Flex align="start" gap="1">
                <param.icon />
                <Text className="whitespace-nowrap">
                  {param.value} {param.subtitle}
                </Text>
              </Flex>
            ))}
          </div>
        </CardContent>
      )}
      {isLargeScreen ? (
        <CardFooter className="flex flex-col gap-6 flex-grow-0">
          <div className="flex gap-4 items-center text-[12px] text-secondary300">
            {carParams.map((param) => (
              <Flex align="center" gap="1">
                <param.icon />
                <Text className="whitespace-nowrap">
                  {param.value} {param.subtitle}
                </Text>
              </Flex>
            ))}
          </div>
          <Flex gap="8" align="center">
            <Box>
              <Text className="font-bold text-xl" as="span">
                ${car.price}.00/ 
              </Text>
              <Text className="font-bold text-sm text-secondary300" as="span">
                day
              </Text>
            </Box>
            <Button className="px-2">Rent Now</Button>
          </Flex>
        </CardFooter>
      ) : (
        <CardFooter className="flex justify-between gap-6 flex-grow-0">
          <Box>
            <Text className="font-bold text-xl" as="span">
              ${car.price}.00/ 
            </Text>
            <Text className="font-bold text-sm text-secondary300" as="span">
              day
            </Text>
          </Box>
          <Button>Rent Now</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CarCard;
