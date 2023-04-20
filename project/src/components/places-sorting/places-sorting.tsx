import { useAppDispatch, useAppSelector } from '../../hooks';
import { OPTIONS_SORTING } from '../../const';
import { sortingOffers } from '../../store/app-process/app-process.slice';
import { getOptionSorting } from '../../store/app-process/app-process.selectors';
import { useEffect, useState } from 'react';

export default function PlacesSorting(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isOpened, setOpened] = useState(false);

  const currentOption = useAppSelector(getOptionSorting);

  useEffect(() => setOpened(false), [currentOption]);

  return (
    <form
      className='places__sorting'
      action='#'
      method='get'
      style={{ display: 'flex' }}
    >
      <span className='places__sorting-caption'>Sort by </span>
      <span className='places__sorting-type' onClick={() => setOpened(true)}>
        &nbsp;{currentOption}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom places__options${
          isOpened ? '--opened' : ''
        }`}
      >
        {OPTIONS_SORTING.map((option) => (
          <li
            className={`places__option ${
              option === currentOption ? 'places__option--active' : ''
            }`}
            key={option}
            onClick={() => {
              dispatch(sortingOffers(option));
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
