import {createAction} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { ReviewType } from '../types/review';
import { City } from '../types/city';

export const changeCity = createAction<City>('city/changeCity');

export const loadOffers = createAction<Offer[]>('offers/loadOffers');

export const loadReviews = createAction<ReviewType[]>('reviews/loadReviews');
