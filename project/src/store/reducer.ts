import {
  switchCity,
  completionListOffrs,
  sortingOffers,
  loadOffers,
  requireAuthorization,
  setOffersLoadingStatus,
  setUserData,
  loadOffer,
  loadNearOffers,
  loadReviews,
  setNewReviews,
} from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Offer, Offers } from '../types/offers-type';
import { LOCATIONS_LIST, OPTIONS_SORTING, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data-type';
import { Reviews } from '../types/review-type';

type State = {
  offers: Offers;
  city: string;
  optionSorting: string;
  offersOfCurrentCity: Offers;
  isOffersLoading: boolean;
  authorizationStatus: string;
  userData: UserData | null;
  offer: Offer | null;
  nearOffers: Offers;
  reviews: Reviews;
};

const initialOffers = [] as Offers;

const initialState: State = {
  offers: initialOffers,
  city: LOCATIONS_LIST[0],
  optionSorting: OPTIONS_SORTING[0],
  offersOfCurrentCity: initialOffers,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  offer: null,
  nearOffers: initialOffers,
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortingOffers, (state, action) => {
      state.optionSorting = action.payload;
    })
    .addCase(completionListOffrs, (state) => {
      state.offersOfCurrentCity = state.offers.filter(
        (offer) => offer.city.name === state.city
      );
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setNewReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
