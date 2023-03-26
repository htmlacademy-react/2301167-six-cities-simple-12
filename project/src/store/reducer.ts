import { createReducer } from '@reduxjs/toolkit';
import { LOCATIONS_LIST } from '../const';
import { offers } from '../mocks/offers';
import { switchCity, completionListOffrs } from './action';
import { Offers } from '../types/offers-type';

type State = {
  city: string;
  offersOfCurrentCity: Offers;
};

const initialState: State = {
  city: LOCATIONS_LIST[0],
  offersOfCurrentCity: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(completionListOffrs, (state) => {
      state.offersOfCurrentCity = offers.filter(
        (offer) => offer.city.name === state.city
      );
    });
});
