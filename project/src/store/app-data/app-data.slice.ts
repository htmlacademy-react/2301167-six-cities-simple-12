import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state-type';
import { NameSpace } from '../../const';
import {
  fetchNearOffersAction,
  fetchOfferAction,
  fetchOffersAction,
} from '../api-action';

const initialState: AppData = {
  offers: [],
  offer: null,
  isOffersLoading: false,
  nearOffers: [],
  hasErrorOffers: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasErrorOffers = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasErrorOffers = true;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.hasErrorOffers = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.hasErrorOffers = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.hasErrorOffers = true;
      });
  },
});
