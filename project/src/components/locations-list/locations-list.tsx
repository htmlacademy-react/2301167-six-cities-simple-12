import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { switchCity } from '../../store/app-process/app-process.slice';
import { getCurrentCity } from '../../store/app-process/app-process.selectors';
import { completionListOffrs } from '../../store/app-data/app-data.slice';

type LocationsListProps = {
  locations: string[];
};

export default function LocationsList({
  locations,
}: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(getCurrentCity);

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {locations.map((city) => (
          <li
            className='locations__item'
            key={city}
            onClick={() => {
              dispatch(switchCity(`${city}`));
              dispatch(completionListOffrs());
            }}
          >
            <Link
              className={`locations__item-link tabs__item ${
                city === currentCity ? 'tabs__item--active' : ''
              }`}
              to='#'
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// className='locations__item-link tabs__item tabs__item--active'
