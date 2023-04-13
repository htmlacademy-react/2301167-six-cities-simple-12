import { Review } from '../../types/review-type';
import { getStarsOfRating } from '../../get-stars-of-rating';

type ItemReviewProps = {
  review: Review;
};

export default function ItemReview({ review }: ItemReviewProps): JSX.Element {
  const { user, rating, comment, date } = review;

  const reviewDate = new Date(date);
  const prepareDate = reviewDate.toLocaleString('en-En', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={user.avatarUrl}
            width='54'
            height='54'
            alt=''
          />
        </div>
        <span className='reviews__user-name'> {user.name} </span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${getStarsOfRating(rating)}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{comment}</p>
        <time className='reviews__time' dateTime={prepareDate}>
          {prepareDate}
        </time>
      </div>
    </li>
  );
}
