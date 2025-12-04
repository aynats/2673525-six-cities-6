import { createSelector } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentOffer = (state: State) => state[NameSpace.Offer].offer;
export const getOfferReviews = (state: State) => state[NameSpace.Offer].reviews;
export const getNearbyOffers = (state: State) => state[NameSpace.Offer].nearby;

export const selectTopNearbyOffers = createSelector(
  [getNearbyOffers],
  (nearbyOffers) => nearbyOffers.slice(0, 3)
);

export const selectMapOffers = createSelector(
  [getCurrentOffer, selectTopNearbyOffers],
  (currentOffer, topNearbyOffers) =>
    currentOffer ? [...topNearbyOffers, currentOffer] : topNearbyOffers
);
