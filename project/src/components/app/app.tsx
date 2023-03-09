import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import Page404 from '../../pages/Page-404/Page404';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  adsCount: number;
};

function App({ adsCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage adsCount={adsCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <PropertyPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
