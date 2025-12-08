export const DEFAULT_CITY = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  NotFound = '/notfound',
  Favorites = '/favorites',
  Offer = '/offer'
}

export const getOfferRoute = (id: string | number): string => `${AppRoute.Offer}/${id}`;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const NameSpace = {
  Offers: 'OFFERS',
  Offer: 'OFFER',
  City: 'CITY',
  User: 'USER',
} as const;

export enum MaxOfferItems {
  MaxNearby = 3,
}

export enum SortingOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}
