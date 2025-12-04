import { createSlice } from '@reduxjs/toolkit';

import { fetchOfferAction, fetchReviewsAction, fetchNearbyAction } from '../api-actions';
import { OfferState } from '../../types/state';


const initialState: OfferState = {
  offer: null,
  reviews: [],
  nearby: [],
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
      });
  },
});


