import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers-type';

type PlaceCardProps = {
  offer: Offer;
};

export default function PlaceCard({ offer }: PlaceCardProps): JSX.Element {
  const { isPremium, price, rating, title } = offer;
  const previewImg = offer.preview[0];
  const premises = offer.propertyType.premises;

  return (
    <article className='cities__card place-card'>
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to='#'>
          <img
            className='place-card__image'
            src={previewImg.src}
            width='260'
            height='200'
            alt={previewImg.alt}
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${Math.round(rating * 20)}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to='#'>{title}</Link>
        </h2>
        <p className='place-card__type'>{premises}</p>
      </div>
    </article>
  );
}
