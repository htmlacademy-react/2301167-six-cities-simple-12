import { Reviews } from '../types/review-type';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: false,
      avatarUrl: '../img/avatar-max.jpg',
      name: 'Max',
    },
    rating: 1.1,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
  {
    id: 2,
    user: {
      id: 2,
      isPro: true,
      avatarUrl: '../img/avatar-max.jpg',
      name: 'Max',
    },
    rating: 2.2,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
  {
    id: 3,
    user: {
      id: 3,
      isPro: true,
      avatarUrl: '../img/avatar-max.jpg',
      name: 'Max',
    },
    rating: 3.3,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
];
