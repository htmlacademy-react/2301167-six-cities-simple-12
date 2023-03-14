import { Reviews } from '../types/review-type';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: false,
      avatar: {
        src: '../img/avatar-max.jpg',
        alt: 'Reviews avatar',
      },
      name: 'Max',
    },
    rating: 4,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
  },
];
