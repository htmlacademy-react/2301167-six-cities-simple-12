import { useAppDispatch, useAppSelector } from '../../hooks';
import { SORTING_OFFERS } from '../../const';
import { sortingOffers } from '../../store/action';

export default function PlacesSorting(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentOption = useAppSelector((state) => state.sorting);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span className='places__sorting-type' tabIndex={0}>
        {currentOption}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className='places__options places__options--custom places__options--opened'>
        {SORTING_OFFERS.map((option) => (
          <li
            className={`places__option ${
              option === currentOption ? 'places__option--active' : ''
            }`}
            key={option}
            onClick={() => {
              dispatch(sortingOffers(option));
            }}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

// className='places__option places__option--active'
