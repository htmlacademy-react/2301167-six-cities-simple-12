import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offers-type';
import { ZERO_ID } from '../../const';

type CitiesPlacesListProps = {
  offers: Offers;
};

export default function CitiesPlacesList({
  offers,
}: CitiesPlacesListProps): JSX.Element {
  const [, /*activeOfferId*/ setActiveOfferId] = useState(ZERO_ID);
  return (
    <div className='cities__places-list places__list tabs__content'>
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
