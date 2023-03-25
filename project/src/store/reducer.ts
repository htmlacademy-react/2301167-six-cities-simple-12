import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { switchCity } from './action';
import { Offers } from '../types/offers-type';

type State = {
  city: string;
  offersInCurrentCity: Offers;
};

const initialState: State = {
  city: '',
  offersInCurrentCity: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(switchCity, (state, action) => {
    state.city = action.payload;
    state.offersInCurrentCity = offers.filter(
      (offer) => (offer.city.name = action.payload)
    );
  });
});
