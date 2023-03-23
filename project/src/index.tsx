import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const city = offers[0].city;

root.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} city={city} />
  </React.StrictMode>
);
