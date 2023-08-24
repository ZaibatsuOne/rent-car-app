import CapacityFilter from "../CapacityFilter";
import PriceFilter from "../PriceFilter";
import TypeFilter from "../TypeFilter";
import { FC } from "react";

interface Props {}

const AsideNavbar: FC<Props> = () => {
  return (
    <aside className="hidden md:flex flex-col gap-14 w-60">
      <TypeFilter />
      <CapacityFilter />
      <PriceFilter />
    </aside>
  );
};

export default AsideNavbar;
