import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LOCATIONS_LIST, NameSpace, OPTIONS_SORTING } from '../../const';
import { AppProcess } from '../../types/state-type';

const initialState: AppProcess = {
  city: LOCATIONS_LIST[0],
  optionSorting: OPTIONS_SORTING[0],
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    switchCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortingOffers: (state, action: PayloadAction<string>) => {
      state.optionSorting = action.payload;
    },
  },
});

export const { switchCity, sortingOffers } = appProcess.actions;
