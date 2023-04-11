import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';

export default function ProfileSection(): JSX.Element {
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const userName = useAppSelector((state) => state.userData?.email);

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item user'>
            <div className='header__nav-profile'>
              <div className='header__avatar-wrapper user__avatar-wrapper'></div>
              <span className='header__user-name user__name'>{userName}</span>
            </div>
          </li>
          <li className='header__nav-item'>
            <Link
              className='header__nav-link'
              to=''
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              <span className='header__signout'>Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item user'>
            <Link
              className='header__nav-link header__nav-link--profile'
              to='/login'
            >
              <div className='header__avatar-wrapper user__avatar-wrapper'></div>
              <span className='header__login'>Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
