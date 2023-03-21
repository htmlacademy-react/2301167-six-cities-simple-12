import { ChangeEvent } from 'react';
import { ArrRatingStars } from '../../const';

type RatingInputProps = {
  onElementChangeHandle: (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function RatingInput({
  onElementChangeHandle,
}: RatingInputProps): JSX.Element {
  return (
    <div className='reviews__rating-form form__rating'>
      {ArrRatingStars.map((itemRating) => (
        <>
          <input
            className='form__rating-input visually-hidden'
            name='rating'
            value={itemRating}
            id={`${itemRating}-stars`}
            type='radio'
            onChange={onElementChangeHandle}
          />
          <label
            htmlFor={`${itemRating}-stars`}
            className='reviews__rating-label form__rating-label'
            title='perfect'
          >
            <svg className='form__star-image' width='37' height='33'>
              <use xlinkHref='#icon-star'></use>
            </svg>
          </label>
        </>
      ))}
    </div>
  );
}
