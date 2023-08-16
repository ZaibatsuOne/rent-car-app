import { FC } from "react";
import SectionBar from "./SectionBar";
import CarCard from "./CarCard";
import { cars } from "@/data/cars";

const PopularCar: FC = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionBar title="Popular car" button={true} />
      <section className="grid grid-cols-4 gap-8">
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
