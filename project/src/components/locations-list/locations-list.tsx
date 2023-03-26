import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { switchCity, completionListOffrs } from '../../store/action';

type LocationsListProps = {
  locations: string[];
};

export default function LocationsList({
  locations,
}: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

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
            <Link className='locations__item-link tabs__item' to='#'>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// className='locations__item-link tabs__item tabs__item--active'
