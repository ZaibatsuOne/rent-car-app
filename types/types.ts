export interface IHeroBanner {
  id: number;
  title: string;
  subtitle: string;
  car: string;
  background: string;
}

export interface ICar {
  id: number;
  name: string;
  type: string;
  gas: number;
  capacity: number;
  image: string;
  priority: string;
  price: number;
  description: string;
  photos: string[];
}

export interface IFooterSubtitle {
  name: string;
  link: string;
}

export interface IFooter {
  id: number;
  title: string;
  subtitle: IFooterSubtitle[];
}

export interface IReview {
  name: string;
  role: string;
  date: number;
  avatar: string;
  review: string;
}

//ZUSTAND
export interface CarState {
  cars: ICar[];
  addCar: (car: ICar) => void;
}

export interface TypeFilterState {
  selectedTypes: string[];
  toggleTypes: (types: string) => void;
}

export interface CapacityFilterState {
  selectedCapacity: number[];
  toggleCapacity: (capacity: number) => void;
}

export interface PriceFilterState {
  selectedPrice: number;
  togglePrice: (price: number) => void;
}

export interface SearchState {
  searchValue: string;
  setSearchValue: (e: any) => void;
}

export interface OpenFormState {
  openForm: boolean;
  setOpenForm: () => void;
}

export interface FavoriteState {
  favoriteList: ICar[];
  addInFavorite: (car: ICar) => void;
}

export interface IFormState {
  name: string;
  phone: string;
  address: string;
  town: string;
  agreeEmail: boolean;
  agreeTerms: boolean;
}

export interface FormState {
  formData: IFormState;
  setFormData: (data: IFormState) => void;
}
