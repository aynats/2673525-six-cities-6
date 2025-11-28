import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { ReviewType } from '../types/review';
import { City } from '../types/city';
//import {AuthorizationStatus} from '../const';

export const changeCity = createAction<City>('data/changeCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const loadReviews = createAction<ReviewType[]>('data/loadReviews');

// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
