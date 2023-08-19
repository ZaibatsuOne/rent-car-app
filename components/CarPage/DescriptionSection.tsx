import { ICar } from "@/types/types";
import { Heart, Star } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

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
    <section className="flex flex-col gap-7">
      <header className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl text-secondary500">{name}</h3>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <span className="font-medium text-sm text-secondary400">
              440+ Reviewer
            </span>
          </div>
        </div>
        <Heart className="mt-2" />
      </header>
      <p className="text-xl text-secondary400">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </p>
      <footer className="flex flex-col gap-16">
        <div className="grid grid-cols-2 gap-4">
          {footerCard.map((param) => (
            <div className="flex justify-between text-xl">
              <span className="text-secondary300">{param.title}</span>
              <span className="capitalize font-semibold text-secondary400">
                {param.value} {param.subtitle}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold">
            <span className="text-[28px] text-secondary500">${price}.00/ </span>
            <span className="text-secondary300">days</span>
          </div>
          <Button size="lg">Rent Now</Button>
        </div>
      </footer>
    </section>
  );
};

export default DescriptionSection;
