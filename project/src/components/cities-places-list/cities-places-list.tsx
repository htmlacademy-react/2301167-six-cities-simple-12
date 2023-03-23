import PlaceCard from '../place-card/place-card';
import { Offer, Offers } from '../../types/offers-type';

type CitiesPlacesListProps = {
  offers: Offers;
  onMouseEnterHandler: (offer: Offer) => void;
};

export default function CitiesPlacesList({
  offers,
  onMouseEnterHandler,
}: CitiesPlacesListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
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
