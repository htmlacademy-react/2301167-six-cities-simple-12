import { useState } from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import CitiesPlacesList from '../cities-places-list/cities-places-list';
import Map from '../map/map';
import { Offers, Offer, City } from '../../types/offers-type';

type OffersListContainerProps = {
  offers: Offers;
  city: City;
};

export default function OffersListContainer({
  offers,
  city,
}: OffersListContainerProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const onOfferListHover = (offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setActiveOffer(currentOffer);
  };

  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>
          {offers.length} places to stay in Amsterdam
        </b>
        <PlacesSorting />
        <CitiesPlacesList offers={offers} onOfferListHover={onOfferListHover} />
      </section>
      <div className='cities__right-section'>
        <Map city={city} offers={offers} activeOffer={activeOffer} />
      </div>
    </div>
  );
}
