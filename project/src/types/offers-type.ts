import { User } from './user-type';

export type Offers = Offer[];

export type Offer = {
  id: number;
  preview: previewImage[];
  isPremium: boolean;
  title: string;
  rating: number;
  propertyType: PropertyType;
  price: number;
  conveniences: string[];
  host: User;
  description: string;
  city: {
    name: string;
    locatoin: Location;
  };
};

export type previewImage = {
  src: string;
  alt: string;
};

export type PropertyType = {
  premises: string;
  bedrooms: number;
  maxAdults: number;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
