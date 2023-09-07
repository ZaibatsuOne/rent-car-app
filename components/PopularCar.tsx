import CarCard from "./CarCard";
import { FC } from "react";
import { ICar } from "@/types/types";
import Link from "next/link";
import SectionBar from "./SectionBar";

interface Props {
  cars: ICar[];
}

const PopularCar: FC<Props> = ({ cars }) => {
  return (
    <section className="flex flex-col gap-5">
      <SectionBar title="Popular car" button={true} />
      <section className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-8">
        {cars
          .filter((cars) => cars.priority === "popular")
          .map((car) => (
            <Link href={`/car/${car.id}`}>
              <CarCard car={car} key={car.image} />
            </Link>
          ))}
      </section>
    </section>
  );
};

export default PopularCar;
