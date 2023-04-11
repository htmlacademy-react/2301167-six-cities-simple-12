import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers-type';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data-type';

export const switchCity = createAction<string>('main/switchCity');

export const sortingOffers = createAction<string>('main/sortingOffers');

export const completionListOffrs = createAction('main/completionListOffrs');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setError = createAction<string | null>('data/setError');

export const setUserData = createAction<UserData | null>('user/setUserData');
