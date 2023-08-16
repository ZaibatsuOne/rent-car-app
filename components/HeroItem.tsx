import Image from "next/image";
import { Button } from "./ui/button";
import { FC } from "react";
import { IHeroBanner } from "@/types/types";
import { cn } from "@/lib/utils";

interface Props {
  hero: IHeroBanner;
}
const HeroItem: FC<Props> = ({ hero }) => {
  const { id, title, subtitle, car } = hero;
  return (
    <div
      className={`relative p-6 rounded-lg h-[360px] ${
        id === 1
          ? "bg-information500 bg-hero-pattern-one"
          : "bg-primary500 bg-hero-pattern-two"
      }`}
    >
      {" "}
      <div className="flex flex-col gap-5 text-white w-1/2">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-3xl">{title} </h2>
          <p className="font-medium">{subtitle}</p>
        </div>
        <div>
          <Button size="lg" className={id === 1 ? "" : "bg-information500"}>
            Rental Car
          </Button>
        </div>
      </div>
      <div className="absolute right-[97px]">
        <Image
          src={car}
          width="0"
          height="0"
          sizes="100vw"
          quality={100}
          className="w-[406px] h-[116px]"
          alt={"Sport car"}
        />
      </div>
    </div>
  );
};

export default HeroItem;
