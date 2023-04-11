import { Outlet } from 'react-router-dom';
import Logo from '../logo/logo';
import ProfileSection from '../profile-section/profile-section';

export default function Layout(): JSX.Element {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <Logo />
            <ProfileSection />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
