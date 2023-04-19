import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offers-type';
import { State } from '../../types/state-types';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | null =>
  state[NameSpace.Data].offer;
export const getOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isOffersLoading;
export const getNearOffers = (state: State): Offers =>
  state[NameSpace.Data].nearOffers;
export const getErrorOffersStatus = (state: State): boolean =>
  state[NameSpace.Data].hasErrorOffers;
