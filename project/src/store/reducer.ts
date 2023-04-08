import {
  switchCity,
  completionListOffrs,
  sortingOffers,
  loadOffers,
  requireAuthorization,
} from './action';
import { createReducer } from '@reduxjs/toolkit';
// import { offers } from '../mocks/offers';
import { Offers } from '../types/offers-type';
import { LOCATIONS_LIST, OPTIONS_SORTING, AuthorizationStatus } from '../const';

type State = {
  offers: Offers;
  city: string;
  optionSorting: string;
  offersOfCurrentCity: Offers;
  authorizationStatus: string;
};

const initialOffers = [] as Offers;
const initialCity = LOCATIONS_LIST[0];
const initialSorting = OPTIONS_SORTING[0];

const initialState: State = {
  offers: initialOffers,
  city: initialCity,
  optionSorting: initialSorting,
  offersOfCurrentCity: initialOffers,
  authorizationStatus: AuthorizationStatus.Unknown,
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
      state.offersOfCurrentCity = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
