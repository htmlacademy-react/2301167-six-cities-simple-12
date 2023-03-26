import { switchCity, completionListOffrs } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offers-type';
import { LOCATIONS_LIST } from '../const';

type State = {
  city: string;
  offersOfCurrentCity: Offers;
};

const initialCity = LOCATIONS_LIST[0];

const initialOffers = offers.filter((offer) => offer.city.name === initialCity);

const initialState: State = {
  city: initialCity,
  offersOfCurrentCity: initialOffers,
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
