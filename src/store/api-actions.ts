import {/*createAction,*/ createAsyncThunk} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
    extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);
