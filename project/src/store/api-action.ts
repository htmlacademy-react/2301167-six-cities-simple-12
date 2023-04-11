import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/offers-type';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import {
  completionListOffrs,
  loadOffers,
  requireAuthorization,
  setError,
  setOffersLoadingStatus,
  setUserData,
} from './action';
import { UserData } from '../types/user-data-type';
import { saveToken } from '../services/token';
import { AuthData } from '../types/auth-data-type';
import { dropToken } from '../services/token';
import { store } from '.';

export const clearErrorAction = createAsyncThunk('data/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

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
  dispatch(completionListOffrs());
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data: userData } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserData(userData));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('uselogin', async ({ login: email, password }, { dispatch, extra: api }) => {
  const { data: userData } = await api.post<UserData>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(userData.token);
  dispatch(setUserData(userData));
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUserData(null));
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
