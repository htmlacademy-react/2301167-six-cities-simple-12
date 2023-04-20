import { useEffect, useState } from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import CitiesPlacesList from '../cities-places-list/cities-places-list';
import Map from '../map/map';
import { Offer, Offers } from '../../types/offers-type';
import { useAppSelector } from '../../hooks';
import {
  // getErrorOffersStatus,
  getOffers,
} from '../../store/app-data/app-data.selectors';
// import { toast } from 'react-toastify';
import { getCurrentCity } from '../../store/app-process/app-process.selectors';
import MainEmpty from '../main-empty/main-empty';

const getOffersOfcity = (offers: Offers, city: string) =>
  offers.filter((offer) => offer.city.name === city);
export default function OffersListContainer(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const [relevantOffers, setRelevantOffers] = useState<Offers>([]);

  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCurrentCity);

  // const isErrorLoading = useAppSelector(getErrorOffersStatus);

  useEffect(() => {
    const currentOffers = getOffersOfcity(offers, city);
    setRelevantOffers(currentOffers);
  }, [city, offers]);

  // useEffect(() => {
  //   if (isErrorLoading) {
  //     toast.warning('Failed to load offers, please refresh the page.');
  //   }
  // }, [relevantOffers, isErrorLoading]);
  if (!relevantOffers.length) {
    return <MainEmpty city={city} />;
  }

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
        <Map
          offers={relevantOffers}
          activeOffer={activeOffer}
          className={'cities'}
        />
      </div>
    </div>
  );
}
