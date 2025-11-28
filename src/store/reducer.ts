import {createReducer} from '@reduxjs/toolkit';
//import { DEFAULT_CITY } from '../const';
//import { offers } from '../mocks/offers';
import { /*changeCity,*/ loadOffers, loadReviews, setOffersDataLoadingStatus } from './action';
//import { reviews } from '../mocks/reviews';
import {Offer} from '../types/offer';
import {ReviewType} from '../types/review';
import { City } from '../types/city';

type InitialState = {
  city: City;
  offers: Offer[];
  reviews: ReviewType[];
  isOffersDataLoading: boolean;
}
const initialState : InitialState = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    }
  },
  offers: [],
  reviews: [],
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })

    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export { reducer };
