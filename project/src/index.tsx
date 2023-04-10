import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { LOCATIONS_LIST } from './const';
import { checkAuthAction, fetchOffersActions } from './store/api-action';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersActions());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={reviews} locations={LOCATIONS_LIST} />
    </Provider>
  </React.StrictMode>
);
