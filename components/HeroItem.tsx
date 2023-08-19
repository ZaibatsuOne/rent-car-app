import Image from "next/image";
import { Button } from "./ui/button";
import { FC } from "react";
import { IHeroBanner } from "@/types/types";

interface Props {
  hero: IHeroBanner;
}
const HeroItem: FC<Props> = ({ hero }) => {
  const { id, title, subtitle, car } = hero;
  return (
    <div
      className={`relative p-6 rounded-lg  ${
        id === 1
          ? "bg-information500 bg-hero-pattern-one"
          : "bg-primary500 bg-hero-pattern-two"
      }`}
    >
      <div className="flex flex-col gap-5 text-white flex-grow ">
        <div className="flex flex-col gap-3 lg:gap-4 w-38 lg:w-1/2">
          <h2 className="font-semibold text-base md:text-3xl ">{title} </h2>
          <p className="font-medium text-xs md:text-base">{subtitle}</p>
        </div>
        <div>
          <Button
            size="lg"
            className={id === 1 ? "" : "bg-information500"}
            href="/dashboard"
          >
            Rental Car
          </Button>
        </div>
      </div>
      <div className="relative pt-6">
        <Image
          src={car}
          width="0"
          height="0"
          sizes="100vw"
          quality={100}
          className="w-fit h-fit min-w-[196px] min-h-[56px] mx-auto"
          alt={"Sport car"}
        />
      </div>
    </div>
  );
};

export default HeroItem;
