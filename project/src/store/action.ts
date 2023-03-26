import { createAction } from '@reduxjs/toolkit';

export const switchCity = createAction<string>('main/switchCity');

export const completionListOffrs = createAction('main/completionListOffrs');
