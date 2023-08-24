import {
  CapacityFilterState,
  CarState,
  ICar,
  TypeFilterState,
} from "@/types/types";
import { create } from "zustand";

//Добавление машины в избранное
export const useFavoriteCars = create<CarState>((set) => ({
  cars: [],
  addCar: (car: ICar) => set((state) => ({ cars: [...state.cars, car] })),
}));

//Фильтрация по типу машины
export const useTypeFilter = create<TypeFilterState>((set) => ({
  selectedTypes: [],
  toggleTypes: (types: string) =>
    set((state) => ({
      selectedTypes: state.selectedTypes.includes(types)
        ? state.selectedTypes.filter((t) => t !== types)
        : [...state.selectedTypes, types],
    })),
}));

//Фильтрация по кол-ву мест
export const useCapacityFilter = create<CapacityFilterState>((set) => ({
  selectedCapacity: [],
  toggleCapacity: (capacity: number) =>
    set((state) => ({
      selectedCapacity: state.selectedCapacity.includes(capacity)
        ? state.selectedCapacity.filter((c) => c !== capacity)
        : [...state.selectedCapacity, capacity],
    })),
}));