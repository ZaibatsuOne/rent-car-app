import { ICar } from "@/types/types";
import { FC } from "react";

interface Props {
  car: ICar;
}

const DescriptionSection: FC<Props> = ({ car }) => {
  return (
    <section>
      <h3 className="font-bold text-3xl text-secondary500">{car.name}</h3>
    </section>
  );
};

export default DescriptionSection;
