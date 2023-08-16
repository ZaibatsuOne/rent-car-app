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

interface Props {
  car: ICar;
}
const CarCard: FC<Props> = ({ car }) => {
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
      <CardContent className="relative flex items-center justify-center py-10">
        <Image src={car.image} width={220} height={68} alt="car" />
        <div className="absolute bg-gradient-to-t from-white w-[220px] h-5 bottom-10" />
      </CardContent>
      <CardFooter className="flex flex-col gap-6">
        <div className="flex gap-4 items-center text-[12px] text-secondary300">
          <div className="flex items-center gap-1">
            <Fuel />
            <span className="capitalize">{car.gas}L</span>
          </div>
          <div className="flex items-center gap-1">
            <LifeBuoy />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-1">
            <Users /> <span>{car.capacity} People</span>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <span className="font-bold text-xl">${car.price}.00/</span>
            <span className="font-bold text-sm text-secondary300">day</span>
          </div>
          <Button>Rent Now</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
