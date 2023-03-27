import { createAction } from '@reduxjs/toolkit';

export const switchCity = createAction<string>('main/switchCity');

export const sortingOffers = createAction<string>('main/sortingOffers');

export const completionListOffrs = createAction('main/completionListOffrs');
