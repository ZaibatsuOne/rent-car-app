import { FC } from "react";
import SectionBar from "./SectionBar";
import CarCard from "./CarCard";
import { cars } from "@/data/cars";
const RecommendCars: FC = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionBar title="Recomendation Car" button={false} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cars
          .filter((car) => car.priority === "recommended")
          .map((car) => (
            <CarCard car={car} key={car.image} />
          ))}
      </section>
    </section>
  );
};

export default RecommendCars;
