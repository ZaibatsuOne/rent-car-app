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
  date: string;
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
  setSearchValue: (e) => void;
}

export interface OpenFormState {
  openForm: boolean;
  setOpenForm: () => void;
}

export interface FeedbackState {
  feedbackList: IReview[];
  addFeedback: (feedback: IReview) => void;
}
