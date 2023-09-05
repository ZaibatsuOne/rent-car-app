import CapacityFilter from "../CapacityFilter";
import PriceFilter from "../PriceFilter";
import TypeFilter from "../TypeFilter";
import { FC } from "react";

interface Props {}

const AsideNavbar: FC<Props> = () => {
  return (
    <div className="bg-white">
      <aside className="container hidden md:flex flex-col gap-14 w-60 py-10">
        <TypeFilter />
        <CapacityFilter />
        <PriceFilter />
      </aside>
    </div>
  );
};

export default AsideNavbar;
