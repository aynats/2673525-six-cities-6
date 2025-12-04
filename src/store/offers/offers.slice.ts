import { createSlice } from '@reduxjs/toolkit';

import { fetchOffersAction } from '../api-actions';
import { OffersState } from '../../types/state';

const initialState: OffersState = {
  offers: [],
  isOffersDataLoading: false,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  },
});
