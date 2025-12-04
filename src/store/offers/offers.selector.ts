import { createSelector } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { getCity } from '../city/city.selector';
import { City } from '../../types/city';

export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].isOffersDataLoading;

export const selectFavoriteOffers = createSelector(
  [getOffers],
  (offers) => offers.filter((offer) => offer.isFavorite)
);

export const selectOffersByCity = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city.name)
);

export const selectUniqueCities = createSelector(
  [getOffers],
  (offers) => {
    const unique: Record<string, City> = {};
    offers.forEach((offer) => {
      unique[offer.city.name] = offer.city;
    });
    return Object.values(unique);
  }
);
