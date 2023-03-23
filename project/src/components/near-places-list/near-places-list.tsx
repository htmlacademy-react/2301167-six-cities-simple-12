import PlaceCard from '../place-card/place-card';
import { Offers, Offer } from '../../types/offers-type';

type NearPlacesListProps = {
  offers: Offers;
  onMouseEnterHandler: (offer: Offer) => void;
};

export default function NearPlacesList({
  offers,
  onMouseEnterHandler,
}: NearPlacesListProps): JSX.Element {
  return (
    <div className='near-places__list places__list'>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onMouseEnterHandler={() => onMouseEnterHandler(offer)}
        />
      ))}
    </div>
  );
}
