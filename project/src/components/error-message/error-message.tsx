import { useAppSelector } from '../../hooks';
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return error ? (
    <div className='error-message'>
      <b>{error}</b>
    </div>
  ) : null;
}
