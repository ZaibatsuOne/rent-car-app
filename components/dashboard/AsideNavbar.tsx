import TypeFilter from "../TypeFilter";
import { Checkbox } from "../ui/checkbox";
import { FC } from "react";
import { Slider } from "../ui/slider";

interface Props {
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
}

const AsideNavbar: FC<Props> = ({ selectedTypes, onTypeChange }) => {
  const capacity = [2, 4, 6, 8];

  return (
    <aside className="flex flex-col gap-14 w-60">
      <TypeFilter selectedTypes={selectedTypes} onTypeChange={onTypeChange} />
      <nav className="flex flex-col gap-7">
        <span className="text-sm uppercase font-medium text-secondary300">
          Capacity
        </span>
        <ul className="flex flex-col gap-1">
          {capacity.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 font-semibold text-lg text-secondary400"
            >
              <Checkbox />
              <span>{item} Person</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col gap-7">
        <span className="text-sm uppercase font-medium text-secondary300">
          Price
        </span>
        <div className="flex flex-col gap-2">
          <Slider defaultValue={[33]} max={100} step={1} />
          <span className="font-semibold text-lg text-secondary400">
            Max. $100
          </span>
        </div>
      </div>
    </aside>
  );
};

export default AsideNavbar;
