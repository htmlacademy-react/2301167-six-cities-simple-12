import { useEffect, useState } from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import CitiesPlacesList from '../cities-places-list/cities-places-list';
import Map from '../map/map';
import { Offer, Offers } from '../../types/offers-type';
import { useAppSelector } from '../../hooks';
import {
  getErrorOffersStatus,
  getOffers,
  getOffersDataLoadingStatus,
} from '../../store/app-data/app-data.selectors';
import { toast } from 'react-toastify';
import { getCurrentCity } from '../../store/app-process/app-process.selectors';
import MainEmpty from '../main-empty/main-empty';
import LoadingPage from '../../pages/loading-page/loading-page';

const getOffersOfcity = (offers: Offers, city: string) =>
  offers.filter((offer) => offer.city.name === city);
const getCityForMap = (offers: Offers) => offers[0].city;

export default function OffersListContainer(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const [relevantOffers, setRelevantOffers] = useState<Offers>([]);

  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCurrentCity);

  const isOffersLoading = useAppSelector(getOffersDataLoadingStatus);
  const isErrorLoading = useAppSelector(getErrorOffersStatus);

  useEffect(() => {
    if (isErrorLoading) {
      toast.warning('Failed to load offers, please refresh the page.');
    }
  }, [isErrorLoading]);

  useEffect(() => {
    const currentOffers = getOffersOfcity(offers, city);
    setRelevantOffers(currentOffers);
  }, [city, offers]);

  if (!isOffersLoading && !isErrorLoading && !relevantOffers.length) {
    return <MainEmpty city={city} />;
  }

  if (!relevantOffers) {
    return <LoadingPage />;
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
          city={getCityForMap(relevantOffers)}
          offers={relevantOffers}
          activeOffer={activeOffer}
          className={'cities'}
        />
      </div>
    </div>
  );
}
