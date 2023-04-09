import LocationsList from '../../components/locations-list/locations-list';
import OffersListContainer from '../../components/offers-list-container/offers-list-container';

type MainPageProps = {
  locations: string[];
};

export default function MainPage({ locations }: MainPageProps): JSX.Element {
  return (
    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <LocationsList locations={locations} />
      </div>
      <div className='cities'>
        <OffersListContainer />
      </div>
    </main>
  );
}
