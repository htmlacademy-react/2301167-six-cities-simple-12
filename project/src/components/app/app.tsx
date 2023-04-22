import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NoteFoundPage from '../../pages/note-found-page/note-found-page';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../../pages/loading-page/loading-page';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getOffersDataLoadingStatus } from '../../store/app-data/app-data.selectors';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppProps = {
  locations: string[];
};

export default function App({ locations }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(getOffersDataLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return <LoadingPage />;
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage locations={locations} />} />
            <Route path={AppRoute.Room} element={<PropertyPage />} />
            <Route path='*' element={<NoteFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
