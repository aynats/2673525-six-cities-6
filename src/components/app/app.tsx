import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus, getOfferRoute, NameSpace } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchOffersAction } from '../../store/api-actions';
import PrivateRoute from '../private-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  //const offers = useAppSelector((state) =>  state[NameSpace.Offers].offers);
  const isOffersDataLoading = useAppSelector((state) => state[NameSpace.Offers].isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state[NameSpace.User].authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
                redirectTo={AppRoute.Login}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={getOfferRoute(':id')}
            element={<OfferPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
