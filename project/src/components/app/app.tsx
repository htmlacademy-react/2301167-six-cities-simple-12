import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Reviews } from '../../types/review-type';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import Page404 from '../../pages/Page-404/Page404';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../../pages/loading-page/loading-page';

type AppProps = {
  reviews: Reviews;
  locations: string[];
};

export default function App({ reviews, locations }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return <LoadingPage />;
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<MainPage locations={locations} />} />
            <Route
              path={AppRoute.Room}
              element={<PropertyPage reviews={reviews} />}
            />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
