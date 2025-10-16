import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    offerId: 1,
    author: 'Max',
    avatar: 'img/avatar-max.jpg',
    rating: 4,
    date: 'April 2019',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 2,
    offerId: 2,
    author: 'Max',
    avatar: 'img/avatar-max.jpg',
    rating: 5,
    date: 'May 2023',
    text: 'Good place to stay!'
  },
  {
    id: 3,
    offerId: 2,
    author: 'Joe',
    avatar: 'img/avatar-angelina.jpg',
    rating: 5,
    date: 'January 2025',
    text: 'Very good place to stay!'
  },
];
