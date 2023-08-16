import PopularCar from "./PopularCar";
import RecommendCars from "./RecommendCars";
import { Button } from "./ui/button";
import { FC } from "react";

const Catalogue: FC = () => {
  return (
    <section className="flex flex-col gap-8 pt-8 pb">
      <PopularCar />
      <RecommendCars />
      <div className="flex items-center justify-center pt-24">
        <Button size="lg" href="/dashboard">
          Show more car
        </Button>
      </div>
    </section>
  );
};

export default Catalogue;
