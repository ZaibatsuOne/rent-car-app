import CarCard from "./CarCard";
import SectionBar from "./SectionBar";
import { cars } from "@/data/cars";
import { FC } from "react";

const PopularCar: FC = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionBar title="Popular car" button={true} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cars
          .filter((cars) => cars.priority === "popular")
          .map((car) => (
            <CarCard car={car} key={car.image} />
          ))}
      </section>
    </section>
  );
};

export default PopularCar;
