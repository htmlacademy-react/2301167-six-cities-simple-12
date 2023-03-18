import { User } from './user-type';

export type Reviews = Review[];

export type Review = {
  id: number;
  user: User;
  rating: number;
  text: string;
  date: string;
};
