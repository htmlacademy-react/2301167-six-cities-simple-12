import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offers-type';
import { State } from '../../types/state-type';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | null =>
  state[NameSpace.Data].offer;
export const getNearOffers = (state: State): Offers =>
  state[NameSpace.Data].nearOffers;
export const getOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isOffersLoading;
export const getOfferDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isOfferLoading;
export const getErrorOffersStatus = (state: State): boolean =>
  state[NameSpace.Data].hasErrorOffers;
export const getErrorOfferStatus = (state: State): boolean =>
  state[NameSpace.Data].hasErrorOffer;
export const getErrorNearOffersStatus = (state: State): boolean =>
  state[NameSpace.Data].hasErrorNearOffers;
