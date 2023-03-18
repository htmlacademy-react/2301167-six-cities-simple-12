import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offers-type';
import { ZERO_ID } from '../../const';

type NearPlacesListProps = {
  offers: Offers;
};

export default function NearPlacesList({
  offers,
}: NearPlacesListProps): JSX.Element {
  const [, /*activeOfferId*/ setActiveOfferId] = useState(ZERO_ID);
  return (
    <div className='near-places__list places__list'>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onMouseEnterHandler={(id) => setActiveOfferId(id)}
        />
      ))}
    </div>
  );
}
