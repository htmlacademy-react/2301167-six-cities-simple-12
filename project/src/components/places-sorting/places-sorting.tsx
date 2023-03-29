import { useAppDispatch, useAppSelector } from '../../hooks';
import { OPTIONS_SORTING } from '../../const';
import { sortingOffers } from '../../store/action';

export default function PlacesSorting(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentOption = useAppSelector((state) => state.optionSorting);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span className='places__sorting-type'>
        {currentOption}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className='places__options places__options--custom places__options--opened'>
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
