import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { SETTINGS } from './const';
import { AMSTERDAM } from './mocks/city';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      city={AMSTERDAM}
      offersCount={SETTINGS.offersCount}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>
);
