import { NameSpace } from '../../const';
import { State } from '../../types/state-types';

export const getCurrentCity = (state: State): string =>
  state[NameSpace.App].city;
export const getOptionSorting = (state: State): string =>
  state[NameSpace.App].optionSorting;
