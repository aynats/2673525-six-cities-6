import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { citySlice } from './city/city.slice';
import { offerSlice } from './offer/offer.slice';
import { offersSlice } from './offers/offers.slice';
import { userSlice } from './user/user.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.City]: citySlice.reducer,
});
