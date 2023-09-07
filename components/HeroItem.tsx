import { Button } from "./ui/button";
import { FC } from "react";
import { IHeroBanner } from "@/types/types";
import Image from "next/image";

interface Props {
  hero: IHeroBanner;
}
const HeroItem: FC<Props> = ({ hero }) => {
  const { id, title, subtitle, car } = hero;
  return (
    <article
      className={`relative p-6 rounded-lg  ${
        id === 1
          ? "bg-information500 bg-hero-pattern-one bg-cover"
          : "bg-primary500 bg-hero-pattern-two"
      }`}
    >
      <div className=" flex flex-col flex-grow gap-5 text-white">
        <div className="lg:gap-4 w-38 lg:w-1/2 flex flex-col gap-3">
          <h2 className="md:text-3xl text-base font-semibold">{title} </h2>
          <p className="md:text-base text-xs font-medium">{subtitle}</p>
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
          className="w-[400px] h-fit min-w-[200px] min-h-[56px] mx-auto"
          alt={"Sport car"}
        />
      </div>
    </article>
  );
};

export default HeroItem;
