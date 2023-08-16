import { FC } from "react";
import PopularCar from "./PopularCar";
import RecommendCars from "./RecommendCars";
import { Button } from "./ui/button";

const Catalogue: FC = () => {
  return (
    <section className="flex flex-col gap-8 pt-8">
      <PopularCar />
      <RecommendCars />
      <div className="flex items-center justify-center">
        <Button className="flex justify-center items-center">
          Show more car
        </Button>
        <span className="justify-center">120 cars</span>
      </div>
    </section>
  );
};

export default Catalogue;
