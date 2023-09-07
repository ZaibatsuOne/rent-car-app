import { ICar } from "@/types/types";
import BillingCard from "./BillingCard";
import { FC } from "react";
import Image from "next/image";
import { Fuel, LifeBuoy, Users } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  TextField,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
} from "@radix-ui/themes";
import { Button } from "./ui/button";

interface Props {
  car: ICar;
}
const RentalSummary: FC<Props> = ({ car }) => {
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
    <BillingCard step={5}>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2">
          <div className="h-28 bg-hero-pattern-two bg-primary400 rounded-xl flex items-center justify-center w-32 px-2 bg-cover">
            <Image src={car.image} alt={car.name} width={1920} height={1080} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="lg:text-3xl text-lg font-bold">{car.name}</h2>
            <div className="text-secondary300 flex gap-2 text-xs">
              {carParams.map((param) => (
                <div className="flex items-center gap-1" key={param.value}>
                  <param.icon />
                  <p className="whitespace-nowrap">
                    {param.value} {param.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className="gap-7 flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-secondary300">Subtotal</p>
            <span>${car.price}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-secondary300">Tax</p>
            <span>$0</span>
          </div>
        </div>
        <div>
          <TextFieldRoot className="flex items-center" radius="large">
            <TextFieldInput placeholder="Apply promo code"></TextFieldInput>
            <TextFieldSlot>
              <Button variant={"ghost"} className="text-black">
                Apply now
              </Button>
            </TextFieldSlot>
          </TextFieldRoot>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className=" font-bold">Total Rental Price</h3>
            <p className="text-secondary300 text-sm">
              Overall price and includes rental discount
            </p>
          </div>
          <span className="text-xl font-bold">${car.price}</span>
        </div>
      </div>
    </BillingCard>
  );
};

export default RentalSummary;
