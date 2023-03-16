import { User } from './user-type';

export type Offers = Offer[];

export type Offer = {
  bedrooms: number;
  city: {
    locatoin: Location;
    name: string;
  };
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isPremium: boolean;
  locatoin: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
