import TypeFilter from "../TypeFilter";
import { Checkbox } from "../ui/checkbox";
import { FC } from "react";
import { Slider } from "../ui/slider";
import CapacityFilter from "../CapacityFilter";

interface Props {
  selectedCapacity: number[];
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
  handleCapacityChange: (capacity: number) => void;
}

const AsideNavbar: FC<Props> = ({
  selectedTypes,
  selectedCapacity,
  handleCapacityChange,
  onTypeChange,
}) => {
  return (
    <aside className="flex flex-col gap-14 w-60">
      <TypeFilter selectedTypes={selectedTypes} onTypeChange={onTypeChange} />
      <CapacityFilter
        selectedCapacity={selectedCapacity}
        handleCapacityChange={handleCapacityChange}
      />
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
