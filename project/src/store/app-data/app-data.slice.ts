import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state-type';
import { NameSpace } from '../../const';
import { city } from '../app-process/app-process.slice'; //////
import {
  fetchNearOffersAction,
  fetchOfferAction,
  fetchOffersAction,
} from '../api-action';

const initialState: AppData = {
  offersOfCurrentCity: [],
  offers: [],
  offer: null,
  isOffersLoading: false,
  nearOffers: [],
  city: city, //////
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    completionListOffrs: (state) => {
      state.offersOfCurrentCity = state.offers.filter(
        (offer) => offer.city.name === state.city
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
        state.offersOfCurrentCity = state.offers.filter(
          (offer) => offer.city.name === state.city
        );
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  },
});

export const { completionListOffrs } = appData.actions;
