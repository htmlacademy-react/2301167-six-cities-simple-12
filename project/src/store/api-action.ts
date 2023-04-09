import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/offers-type';
import { APIRoute } from '../const';
import { loadOffers, setOffersLoadingStatus } from './action';

export const fetchOffersActions = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setOffersLoadingStatus(false));
  dispatch(loadOffers(data));
});
