import { createSlice } from '@reduxjs/toolkit';
import { ReviewData } from '../../types/state-type';
import { NameSpace } from '../../const';
import { fetchReviewsAction, sendReviewAction } from '../api-action';

const initialState: ReviewData = {
  reviews: [],
};

export const reviewData = createSlice({
  name: NameSpace.Comment,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
