import { Link } from 'react-router-dom';
import OffersListContainer from '../../components/offers-list-container/offers-list-container';
import { Offers } from '../../types/offers-type';

type MainPageProps = {
  offers: Offers;
};

export default function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list'>
            <li className='locations__item'>
              <Link className='locations__item-link tabs__item' to='#'>
                <span>Paris</span>
              </Link>
            </li>
            <li className='locations__item'>
              <Link className='locations__item-link tabs__item' to='#'>
                <span>Cologne</span>
              </Link>
            </li>
            <li className='locations__item'>
              <Link className='locations__item-link tabs__item' to='#'>
                <span>Brussels</span>
              </Link>
            </li>
            <li className='locations__item'>
              <Link
                className='locations__item-link tabs__item tabs__item--active'
                to={''}
              >
                <span>Amsterdam</span>
              </Link>
            </li>
            <li className='locations__item'>
              <Link className='locations__item-link tabs__item' to='#'>
                <span>Hamburg</span>
              </Link>
            </li>
            <li className='locations__item'>
              <Link className='locations__item-link tabs__item' to='#'>
                <span>Dusseldorf</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className='cities'>
        <OffersListContainer offers={offers} />
      </div>
    </main>
  );
}