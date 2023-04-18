import { useEffect, useState } from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import CitiesPlacesList from '../cities-places-list/cities-places-list';
import Map from '../map/map';
import { Offer } from '../../types/offers-type';
import { useAppSelector } from '../../hooks';
import {
  getErrorOffersStatus,
  getOffersOfCurrentCity,
} from '../../store/app-data/app-data.selectors';
import { toast } from 'react-toastify';

export default function OffersListContainer(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const relevantOffers = useAppSelector(getOffersOfCurrentCity);

  const isErrorLoading = useAppSelector(getErrorOffersStatus);

  useEffect(() => {
    if (isErrorLoading) {
      toast.warning('Failed to load offers, please refresh the page.');
    }
  }, [relevantOffers, isErrorLoading]);

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
