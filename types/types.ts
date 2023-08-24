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
