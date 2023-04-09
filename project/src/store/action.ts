import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers-type';
import { AuthorizationStatus } from '../const';

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
