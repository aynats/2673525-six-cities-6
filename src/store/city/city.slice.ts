import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { City } from '../../types/city';
import { CityState } from '../../types/state';

const initialState: CityState = {
  city: {
    name: 'Paris',
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
  },
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;

