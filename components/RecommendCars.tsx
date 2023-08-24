import CarCard from "./CarCard";
import Link from "next/link";
import SectionBar from "./SectionBar";
import { cars } from "@/data/cars";
import { FC } from "react";
import { Grid } from "@radix-ui/themes";

interface Props {
  columns?: string;
  count?: number;
}

const RecommendCars: FC<Props> = ({ columns = "4", count }) => {
  count === cars.length;
  return (
    <section className="flex flex-col gap-5">
      <SectionBar title="Recomendation Car" button={false} />
      <Grid columns={columns} gap="8" className="lg:grid-cols-2">
        {cars
          .slice(0, count)
          .filter((car) => car.priority === "recommended")
          .map((car) => (
            <Link href={`/car/${car.id}`}>
              <CarCard car={car} key={car.image} />
            </Link>
          ))}
      </Grid>
    </section>
  );
};

export default RecommendCars;

{
  /* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> */
}
