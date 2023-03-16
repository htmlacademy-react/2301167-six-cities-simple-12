import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offers-type';

type NearPlacesListProps = {
  offers: Offers;
};

export default function NearPlacesList({
  offers,
}: NearPlacesListProps): JSX.Element {
  return (
    <div className='near-places__list places__list'>
      {offers.map((offer) => (
        <PlaceCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}
