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
  isOfferLoading: false,
  nearOffers: [],
  hasErrorOffers: false,
  hasErrorOffer: false,
  hasErrorNearOffers: false,
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
        state.isOfferLoading = true;
        state.hasErrorOffer = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.hasErrorOffer = true;
        state.isOfferLoading = false;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.hasErrorNearOffers = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.hasErrorNearOffers = true;
      });
  },
});
