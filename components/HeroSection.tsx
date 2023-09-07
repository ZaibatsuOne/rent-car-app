"use client";

import Carousel from "nuka-carousel";
import { FC } from "react";
import HeroItem from "./HeroItem";
import { heroSectionData } from "@/data/data";
import { useMediaQuery } from "react-responsive";

const HeroSection: FC = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section
      className={`grid ${
        isLargeScreen ? "lg:grid-cols-2" : "grid-cols-1"
      } gap-8`}
    >
      {isLargeScreen ? (
        heroSectionData.map((hero) => <HeroItem hero={hero} key={hero.id} />)
      ) : (
        <Carousel
          autoplay={true}
          wrapAround={true}
          autoplayInterval={3000}
          withoutControls={true}
          disableEdgeSwiping={true}
        >
          {heroSectionData.map((hero) => (
            <HeroItem hero={hero} key={hero.id} />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default HeroSection;
