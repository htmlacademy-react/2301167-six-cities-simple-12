import { createAction } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';

export const switchCity = createAction('main/switchCity', (value) => {
  return { payload: value };
});

export const completionListOffrs = createAction(
  'main/completionListOffrs',
  () => {
    return { payload: offers };
  }
);
