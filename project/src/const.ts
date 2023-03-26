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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
