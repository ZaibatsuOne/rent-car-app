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
import { Fuel, LifeBuoy, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ICar } from "@/types/types";
import { useMediaQuery } from "react-responsive";
import { Box, Flex, Text } from "@radix-ui/themes";

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
    <Card className="flex flex-col min-h-[403px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Text className="whitespace-nowrap">{car.name}</Text>
        </CardTitle>
        <CardDescription>
          <Text className="text-secondary300 font-bold capitalize">
            {car.type}
          </Text>
        </CardDescription>
      </CardHeader>
      {isLargeScreen ? (
        <CardContent className="relative flex items-center justify-center flex-grow py-10">
          <Image src={car.image} width={220} height={68} alt="car" />
          <div className="absolute bg-gradient-to-t from-white w-[220px] h-5 bottom-10" />
        </CardContent>
      ) : (
        <CardContent className="relative flex items-center justify-between flex-grow py-10">
          <Box>
            <Image src={car.image} width={166} height={68} alt="car" />
            <div className="absolute bg-gradient-to-t from-white w-[150px] lg:w-[220px] h-5 bottom-10" />
          </Box>
          <div className="flex flex-col gap-4 items-start text-[12px] text-secondary300">
            {carParams.map((param) => (
              <Flex align="start" gap="1" key={param.subtitle}>
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
        <CardFooter className="flex flex-col flex-grow-0 gap-6">
          <div className="flex gap-4 items-center text-[12px] text-secondary300">
            {carParams.map((param) => (
              <Flex align="center" gap="1" key={param.value}>
                <param.icon />
                <Text className="whitespace-nowrap">
                  {param.value} {param.subtitle}
                </Text>
              </Flex>
            ))}
          </div>
          <Flex gap="8" align="center">
            <Box>
              <Text className="text-xl font-bold" as="span">
                ${car.price}.00/ 
              </Text>
              <Text className="text-secondary300 text-sm font-bold" as="span">
                day
              </Text>
            </Box>
            <Button className="px-2">Rent Now</Button>
          </Flex>
        </CardFooter>
      ) : (
        <CardFooter className="flex justify-between flex-grow-0 gap-6">
          <Box>
            <Text className="text-xl font-bold" as="span">
              ${car.price}.00/ 
            </Text>
            <Text className="text-secondary300 text-sm font-bold" as="span">
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
