import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers-type';

type PlaceCardProps = {
  offer: Offer;
  onMouseEnterHandler: (id: number) => void;
};

export default function PlaceCard({
  offer,
  onMouseEnterHandler,
}: PlaceCardProps): JSX.Element {
  const { isPremium, price, rating, title, previewImage, type } = offer;

  return (
    <article
      className='cities__card place-card'
      onMouseEnter={() => onMouseEnterHandler(offer.id)}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to='#'>
          <img
            className='place-card__image'
            src={previewImage}
            alt=''
            width='260'
            height='200'
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
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
