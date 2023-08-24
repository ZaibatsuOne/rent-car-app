import CarCard from "./CarCard";
import Link from "next/link";
import SectionBar from "./SectionBar";
import { FC } from "react";
import { Grid } from "@radix-ui/themes";
import { ICar } from "@/types/types";

interface Props {
  columns?: string;
  count?: number;
  cars?: ICar[];
}

const RecommendCars: FC<Props> = ({ columns = "4", count, cars }) => {
  count === cars?.length;
  return (
    <section className="flex flex-col gap-5">
      <SectionBar title="Recomendation Car" button={false} />
      <Grid columns={columns} gap="8" className="lg:grid-cols-2">
        {cars
          ?.filter((car) => car.priority === "recommended")
          .slice(0, count)
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
