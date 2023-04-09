import { useState } from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import CitiesPlacesList from '../cities-places-list/cities-places-list';
import Map from '../map/map';
import { Offer } from '../../types/offers-type';
import { useAppSelector } from '../../hooks';

export default function OffersListContainer(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const relevantOffers = useAppSelector((state) => state.offersOfCurrentCity);

  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>
          {relevantOffers.length} places to stay in Amsterdam
        </b>
        <PlacesSorting />
        <CitiesPlacesList
          offers={relevantOffers}
          onMouseEnterHandler={(offer) => setActiveOffer(offer)}
        />
      </section>
      <div className='cities__right-section'>
        <Map offers={relevantOffers} activeOffer={activeOffer} />
      </div>
    </div>
  );
}
