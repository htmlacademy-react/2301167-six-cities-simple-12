import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { LOCATIONS_LIST } from './const';
import { fetchOffersActions } from './store/api-action';

store.dispatch(fetchOffersActions());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const city = offers[0].city;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
        city={city}
        locations={LOCATIONS_LIST}
      />
    </Provider>
  </React.StrictMode>
);
