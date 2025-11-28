import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, loadReviews, setOffersDataLoadingStatus,
  requireAuthorization, setError, setUserData } from './action';
import {Offer} from '../types/offer';
import {ReviewType} from '../types/review';
import { City } from '../types/city';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../const';

type InitialState = {
  city: City;
  offers: Offer[];
  reviews: ReviewType[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  error: string | null;
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
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
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
    })

    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
