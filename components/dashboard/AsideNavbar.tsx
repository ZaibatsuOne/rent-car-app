import CapacityFilter from "../CapacityFilter";
import { FC } from "react";
import PriceFilter from "../PriceFilter";
import TypeFilter from "../TypeFilter";

interface Props {}

const AsideNavbar: FC<Props> = () => {
  return (
    <div className="bg-white">
      <aside className="md:flex gap-14 w-60 container flex-col hidden py-10">
        <TypeFilter />
        <CapacityFilter />
        <PriceFilter />
      </aside>
    </div>
  );
};

export default AsideNavbar;
