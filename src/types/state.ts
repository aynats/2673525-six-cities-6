import { City } from './city';
import { Offer } from './offer';
import { ReviewType } from './review';

export type State = {
  city: City;
  offers: Offer[];
  reviews: ReviewType[];
};
