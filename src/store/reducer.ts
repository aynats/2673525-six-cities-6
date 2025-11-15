import {createReducer} from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { offers } from '../mocks/offers';
import { changeCity, loadOffers, loadReviews } from './action';
import { reviews } from '../mocks/reviews';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  reviews: reviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export { reducer };
