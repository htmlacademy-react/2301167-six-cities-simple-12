import { createAction } from '@reduxjs/toolkit';
import { Offer, Offers } from '../types/offers-type';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data-type';
import { Reviews } from '../types/review-type';

export const switchCity = createAction<string>('main/switchCity');

export const sortingOffers = createAction<string>('main/sortingOffers');

export const completionListOffrs = createAction('main/completionListOffrs');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadNearOffers = createAction<Offers>('data/loadNearOffers');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setNewReviews = createAction<Reviews>('data/setNewReviews');

export const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setUserData = createAction<UserData | null>('user/setUserData');
