import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import Page404 from '../../pages/Page-404/Page404';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  adsCount: number;
};

export default function App({ adsCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<MainPage adsCount={adsCount} />} />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Room} element={<PropertyPage />} />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
