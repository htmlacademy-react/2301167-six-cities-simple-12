export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO-AUTH',
  Unknown = 'UNKNOWN',
}

// export const ZERO_ID = 0;

export const MAX_RATING = 5;
export const MULTIPLIER_FOR_RATING = 100 / MAX_RATING;

export const ArrRatingStars = [5, 4, 3, 2, 1];

export const LOCATIONS_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const OPTIONS_SORTING = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}
