import { AuthorizationStatus } from '../const';
import { Offer, Offers } from './offers-type';
import { Reviews } from './review-type';
import { UserData } from './user-data-type';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type AppProcess = {
  city: string;
  optionSorting: string;
};

export type AppData = {
  offersOfCurrentCity: Offers;
  offers: Offers;
  offer: Offer | null;
  isOffersLoading: boolean;
  nearOffers: Offers;
  city: string; //////
};

export type ReviewData = {
  reviews: Reviews;
};
