import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { Offer, OfferId, Offers } from '../types/offers-type';
import { APIRoute /*AuthorizationStatus*/ } from '../const';
// import {
//   completionListOffrs,
//   loadNearOffers,
//   loadOffer,
//   loadOffers,
//   loadReviews,
//   // requireAuthorization,
//   setNewReviews,
//   setOffersLoadingStatus,
//   // setUserData,
// } from './action';
import { UserData } from '../types/user-data-type';
import { saveToken } from '../services/token';
import { AuthData } from '../types/auth-data-type';
import { dropToken } from '../services/token';
import { NewReview, Reviews } from '../types/review-type';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  // dispatch(setOffersLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  // dispatch(setOffersLoadingStatus(false));
  // dispatch(loadOffers(data));
  // dispatch(completionListOffrs());
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  Offer,
  OfferId,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffer', async ({ id }, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  // dispatch(loadOffer(data));
  return data;
});

export const fetchNearOffersAction = createAsyncThunk<
  Offers,
  OfferId,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchNearOffers', async ({ id }, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
  // dispatch(loadNearOffers(data));
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Reviews,
  OfferId,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('comment/fetchReviews', async ({ id }, { dispatch, extra: api }) => {
  const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
  // dispatch(loadReviews(data));
  return data;
});

export const sendReviewAction = createAsyncThunk<
  Reviews,
  NewReview,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'comment/sendReview',
  async ({ hotelId, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<Reviews>(
      `${APIRoute.Comments}/${hotelId}`,
      { comment, rating }
    );
    // dispatch(setNewReviews(data));
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  // try {
  //   const { data: userData } = await api.get<UserData>(APIRoute.Login);
  //   dispatch(setUserData(userData));
  //   dispatch(requireAuthorization(AuthorizationStatus.Auth));
  // } catch {
  //   dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  // }
  const { data: userData } = await api.get<UserData>(APIRoute.Login);
  return userData;
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: userData } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(userData.token);
    // dispatch(setUserData(userData));
    // dispatch(requireAuthorization(AuthorizationStatus.Auth));
    return userData;
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  // dispatch(setUserData(null));
  // dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
