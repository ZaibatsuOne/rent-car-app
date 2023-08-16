import { FC } from "react";
import PopularCar from "./PopularCar";

const Catalogue: FC = () => {
  return (
    <section className="flex flex-col gap-8 pt-8">
      <PopularCar />
    </section>
  );
};

export default Catalogue;
