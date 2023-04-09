import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Page404 from '../Page-404/Page404';
import Map from '../../components/map/map';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import { Offer } from '../../types/offers-type';
import { Reviews } from '../../types/review-type';
import { getStarsOfRating } from '../../get-stars-of-rating';
import UsersReviews from '../../components/users-reviews/users-reviews';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

type PropertyPageProps = {
  reviews: Reviews;
};

export default function PropertyPage({
  reviews,
}: PropertyPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const { id } = useParams<string>();

  const offers = useAppSelector((state) => state.offersOfCurrentCity);

  const filteredOffers = offers.filter((offer) => offer.id !== Number(id));

  const offer = offers.find((room) => room.id === Number(id)) as Offer;

  if (!offer) {
    return <Page404 />;
  }

  const {
    images,
    isPremium,
    type,
    title,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;

  return (
    <>
      <Helmet>
        <title>6/Cities.Room</title>
      </Helmet>

      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {images.map((image) => (
                <div className='property__image-wrapper' key={image}>
                  <img className='property__image' src={image} alt='' />
                </div>
              ))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {isPremium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>{title}</h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: `${getStarsOfRating(rating)}%` }} />
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {goods.map((good) => (
                    <li className='property__inside-item' key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src={host.avatarUrl}
                      width='74'
                      height='74'
                      alt=''
                    />
                  </div>
                  <span className='property__user-name'> {host.name} </span>
                  {host.isPro && (
                    <span className='property__user-status'> Pro </span>
                  )}
                </div>
                <div className='property__description'>
                  <p className='property__text'>{description}</p>
                </div>
              </div>
              <UsersReviews reviews={reviews} />
            </div>
          </div>
          <section className='property__map map'>
            <Map offers={filteredOffers} activeOffer={activeOffer} />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <NearPlacesList
              offers={filteredOffers}
              onMouseEnterHandler={(offerItem) => setActiveOffer(offerItem)}
            />
          </section>
        </div>
      </main>
    </>
  );
}
