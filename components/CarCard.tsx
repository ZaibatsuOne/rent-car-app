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
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="capitalize">{car.name}</p>
          <Heart absoluteStrokeWidth />
        </CardTitle>
        <CardDescription>
          <span className="font-bold text-secondary300 capitalize">
            {car.type}
          </span>
        </CardDescription>
      </CardHeader>
      {isLargeScreen ? (
        <CardContent className="relative flex items-center justify-center py-10">
          <Image src={car.image} width={220} height={68} alt="car" />
          <div className="absolute bg-gradient-to-t from-white w-[220px] h-5 bottom-10" />
        </CardContent>
      ) : (
        <CardContent className="relative flex items-center justify-between py-10">
          <div>
            <Image src={car.image} width={166} height={68} alt="car" />
            <div className="absolute bg-gradient-to-t from-white w-[150px] lg:w-[220px] h-5 bottom-10" />
          </div>
          <div className="flex flex-col gap-4 items-start text-[12px] text-secondary300">
            {carParams.map((param) => (
              <div className="flex items-center gap-1">
                <param.icon />
                <span className="whitespace-nowrap">
                  {param.value} {param.subtitle}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      )}
      {isLargeScreen ? (
        <CardFooter className="flex flex-col gap-6">
          <div className="flex gap-4 items-center text-[12px] text-secondary300">
            {carParams.map((param) => (
              <div className="flex items-center gap-1">
                <param.icon />
                <span className="whitespace-nowrap">
                  {param.value} {param.subtitle}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-8 items-center">
            <div>
              <span className="font-bold text-xl">${car.price}.00/</span>
              <span className="font-bold text-sm text-secondary300">day</span>
            </div>
            <Button>Rent Now</Button>
          </div>
        </CardFooter>
      ) : (
        <CardFooter className="flex justify-between gap-6 ">
          <div>
            <span className="font-bold text-xl">${car.price}.00/</span>
            <span className="font-bold text-sm text-secondary300">day</span>
          </div>
          <Button>Rent Now</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CarCard;
