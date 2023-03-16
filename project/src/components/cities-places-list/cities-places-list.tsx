import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offers-type';

type CitiesPlacesListProps = {
  offers: Offers;
};

export default function CitiesPlacesList({
  offers,
}: CitiesPlacesListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) => (
        <PlaceCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}
