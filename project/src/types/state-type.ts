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
  offers: Offers;
  offer: Offer | null;
  isOffersLoading: boolean;
  nearOffers: Offers;
  hasErrorOffers: boolean;
};

export type ReviewData = {
  reviews: Reviews;
  hasErrorReview: boolean;
};
