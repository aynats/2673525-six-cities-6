import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, getOfferRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route';
import {Offer} from '../../types/offer';
import {City} from '../../types/city';
import { ReviewType } from '../../types/review';

type AppProps = {
  city: City;
  offers: Offer[];
  reviews: ReviewType[];
}

function App({city, offers, reviews}: AppProps): JSX.Element {
  const offersCount = offers.length;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage city={city} offersCount={offersCount} offers={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute redirectTo = {AppRoute.Login}>
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={getOfferRoute(':id')}
            element={<OfferPage reviews={reviews} city={city} offers={offers}/>}
          />
          <Route
            path= "*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
