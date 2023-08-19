"use client";
import { createContext, useState, useContext, FC, ReactNode } from "react";

interface IFilterProvider {
  children: ReactNode;
}

interface SelectedFilterContextType {
  selectedTypes: string[];
  selectedCapacity: number[];
  setSelectedTypes: (types: string[]) => void;
  setSelectedCapacity: (capacity: number[]) => void;
}

const SelectedFilterContext = createContext<
  SelectedFilterContextType | undefined
>(undefined);

const FilterProvider: FC<IFilterProvider> = ({ children }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<number[]>([]);

  return (
    <SelectedFilterContext.Provider
      value={{
        selectedTypes,
        selectedCapacity,
        setSelectedTypes,
        setSelectedCapacity,
      }}
    >
      {children}
    </SelectedFilterContext.Provider>
  );
};

export default FilterProvider;

export function useSelectedFilter() {
  const context = useContext(SelectedFilterContext);
  return context;
}
