import {
  CapacityFilterState,
  CarState,
  FavoriteState,
  ICar,
  OpenFormState,
  PriceFilterState,
  SearchState,
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

//Фильтрация по цене
export const usePriceFilter = create<PriceFilterState>((set) => ({
  selectedPrice: 100,
  togglePrice: (price: number) => set((state) => ({ selectedPrice: price })),
}));

//Поиск по NavBar
export const useSearch = create<SearchState>((set) => ({
  searchValue: "",
  setSearchValue: (value) => set({ searchValue: value }),
}));

//Открытие формы для отзыва
export const useLeaveFeedback = create<OpenFormState>((set) => ({
  openForm: false,
  setOpenForm: () => set((state) => ({ openForm: !state.openForm })),
}));

//Добавление в избранное
export const useAddFavorite = create<FavoriteState>((set) => ({
  favoriteList: [],
  addInFavorite: (car: ICar) =>
    set((state) => ({ favoriteList: [...state.favoriteList, car] })),
  removeFromFavorite: () =>
    set((state) => ({
      favoriteList: state.favoriteList.filter((car) => car !== car.id),
    })),
}));
