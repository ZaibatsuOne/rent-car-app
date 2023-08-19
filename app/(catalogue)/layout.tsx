"use client";
import AsideNavbar from "@/components/dashboard/AsideNavbar";
import { useSelectedFilter } from "@/components/Providers/FilterProvider";
import { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}
const layout = ({ children }: Layout) => {
  const {
    selectedTypes,
    selectedCapacity,
    setSelectedCapacity,
    setSelectedTypes,
  } = useSelectedFilter();

  const handleCapacityChange = (capacity: number) => {
    if (selectedCapacity.includes(capacity)) {
      setSelectedCapacity(selectedCapacity.filter((c) => c !== capacity));
    } else {
      setSelectedCapacity([...selectedCapacity, capacity]);
    }
  };

  const handleTypeChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  return (
    <main className="flex gap-4">
      <AsideNavbar
        handleCapacityChange={handleCapacityChange}
        selectedCapacity={selectedCapacity}
        onTypeChange={handleTypeChange}
        selectedTypes={selectedTypes}
      />
      {children}
    </main>
  );
};

export default layout;
