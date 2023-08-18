import HeroItem from "./HeroItem";
import { FC } from "react";
import { heroSectionData } from "@/data/data";

const HeroSection: FC = () => {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {heroSectionData.map((hero) => (
        <HeroItem hero={hero} key={hero.id} />
      ))}
    </section>
  );
};

export default HeroSection;
