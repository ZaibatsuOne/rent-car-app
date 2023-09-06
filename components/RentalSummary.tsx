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
          <div className="w-32 h-28 px-2 bg-hero-pattern-two bg-primary400 bg-cover rounded-xl flex items-center justify-center">
            <Image src={car.image} alt={car.name} width={1920} height={1080} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg lg:text-3xl">{car.name}</h2>
            <div className="flex gap-2 text-xs text-secondary300">
              {carParams.map((param) => (
                <div className="flex gap-1 items-center" key={param.value}>
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
        <div className="flex flex-col gap-7">
          <div className="flex justify-between items-center">
            <p className="text-secondary300">Subtotal</p>
            <span>${car.price}</span>
          </div>
          <div className="flex justify-between items-center">
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
        <div className="flex justify-between items-center">
          <div>
            <h3 className=" font-bold">Total Rental Price</h3>
            <p className="text-sm text-secondary300">
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
