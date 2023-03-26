import LocationsList from '../../components/locations-list/locations-list';
import OffersListContainer from '../../components/offers-list-container/offers-list-container';
import { City } from '../../types/offers-type';
import { useAppSelector } from '../../hooks';

type MainPageProps = {
  // offers: Offers;
  city: City;
  locations: string[];
};

export default function MainPage({
  // offers,
  city,
  locations,
}: MainPageProps): JSX.Element {
  const relevantOffers = useAppSelector((state) => state.offersOfCurrentCity);

  return (
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <LocationsList locations={locations} />
      </div>
      <div className='cities'>
        <OffersListContainer offers={relevantOffers} city={city} />
      </div>
    </main>
  );
}
