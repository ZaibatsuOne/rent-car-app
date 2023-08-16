import HeroItem from "./HeroItem";
import { FC } from "react";
import { heroSectionData } from "@/data/data";

const HeroSection: FC = () => {
  return (
    <section className="grid grid-cols-2 gap-8">
      {heroSectionData.map((hero) => (
        <HeroItem hero={hero} key={hero.id} />
      ))}
    </section>
  );
};

export default HeroSection;
