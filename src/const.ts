import { CITIES, DEFAULT_CITY } from './mocks/cities';

export { CITIES, DEFAULT_CITY };

export const SETTINGS = {
  offersCount: 312
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  NotFound = '/notfound',
  Favorites = '/favorites',
  Offer = '/offer'
}

export const getOfferRoute = (id: string | number): string => `${AppRoute.Offer}/${id}`;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
