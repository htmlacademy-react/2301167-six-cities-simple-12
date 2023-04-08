import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/offers-type';
import { APIRoute } from '../const';
import { loadOffers } from './action';

export const fetchOffersActions = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(loadOffers(data));
});
