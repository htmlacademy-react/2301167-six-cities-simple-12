import { OPTIONS_SORTING } from './const';
import { Offers } from './types/offers-type';

export function getSortingBy(offers: Offers, option: string) {
  const currentOffers = [...offers];

  switch (option) {
    case OPTIONS_SORTING[1]:
      currentOffers.sort((a, b) => a.price - b.price);
      break;
    case OPTIONS_SORTING[2]:
      currentOffers.sort((a, b) => b.price - a.price);
      break;
    case OPTIONS_SORTING[3]:
      currentOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return currentOffers;
}
