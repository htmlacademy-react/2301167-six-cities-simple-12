import { NameSpace } from '../../const';
import { Reviews } from '../../types/review-type';
import { State } from '../../types/state-types';

export const getReviews = (state: State): Reviews =>
  state[NameSpace.Comment].reviews;
