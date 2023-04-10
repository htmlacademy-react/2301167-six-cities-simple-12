import {
  switchCity,
  completionListOffrs,
  sortingOffers,
  loadOffers,
  requireAuthorization,
  setOffersLoadingStatus,
  setError,
} from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offers-type';
import { LOCATIONS_LIST, OPTIONS_SORTING, AuthorizationStatus } from '../const';

type State = {
  offers: Offers;
  city: string;
  optionSorting: string;
  offersOfCurrentCity: Offers;
  isOffersLoading: boolean;
  authorizationStatus: string;
  error: string | null;
};

const initialOffers = [] as Offers;
const initialCity = LOCATIONS_LIST[0];
const initialSorting = OPTIONS_SORTING[0];

const initialState: State = {
  offers: initialOffers,
  city: initialCity,
  optionSorting: initialSorting,
  offersOfCurrentCity: initialOffers,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
