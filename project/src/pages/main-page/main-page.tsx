import LocationsList from '../../components/locations-list/locations-list';
import OffersListContainer from '../../components/offers-list-container/offers-list-container';
import { Offers, City } from '../../types/offers-type';

type MainPageProps = {
  offers: Offers;
  city: City;
  locations: string[];
};

export default function MainPage({
  offers,
  city,
  locations,
}: MainPageProps): JSX.Element {
  return (
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <LocationsList locations={locations} />
      </div>
      <div className='cities'>
        <OffersListContainer offers={offers} city={city} />
      </div>
    </main>
  );
}
