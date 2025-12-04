import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list-cities';

import { useAppSelector } from '../../hooks/use-app-selector';
import { type Offer } from '../../types/offer';
import { selectFavoriteOffers } from '../../store/offers/offers.selector';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);

  // const amsterdamOffers = favoriteOffers.filter((offer) => offer.city.name === 'Amsterdam');
  // const cologneOffers = favoriteOffers.filter((offer) => offer.city.name === 'Cologne');
  // const parisOffers = favoriteOffers.filter((offer) => offer.city.name === 'Paris');
  // const brusselsOffers = favoriteOffers.filter((offer) => offer.city.name === 'Brussels');
  // const hamburgOffers = favoriteOffers.filter((offer) => offer.city.name === 'Hamburg');
  // const dusseldorfOffers = favoriteOffers.filter((offer) => offer.city.name === 'Dusseldorf');

  const offersByCity = useMemo(() => favoriteOffers.reduce<Record<string, Offer[]>>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }
    acc[offer.city.name].push(offer);
    return acc;
  }, {}), [favoriteOffers]);

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities — favorites'}</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offersByCity).map(([cityName, cityOffers]) => (
                <li key={cityName} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OfferList offers={cityOffers} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}


export default FavoritesPage;
