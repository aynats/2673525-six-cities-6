import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import {AppRoute, /*CITIES*/} from '../../const';
import { useState } from 'react';
import Map from '../../components/map';
import OfferListCities from '../../components/offer-list-cities';
import CitiesList from '../../components/cities-list';
import { useDispatch, /*useSelector */} from 'react-redux';
//import { State } from '../../types/state';
import { changeCity } from '../../store/action';
import { useAppSelector } from '../../hooks/use-app-selector';
import { RootState } from '../../store';

function MainPage(): JSX.Element {

  const dispatch = useDispatch();
  const currentCity = useAppSelector((state : RootState) => state.city);
  const allOffers = useAppSelector((state : RootState) => state.offers);

  const cityOffers = allOffers.filter((offer) => offer.city.name === currentCity.name);
  const offersCount = cityOffers.length;

  const cities = Array.from(new Set(allOffers.map((offer) => offer.city)));
  const handleCityChange = (city: typeof cities[0]) => {
    dispatch(changeCity(city));
  };

  const favoriteOffers = allOffers.filter((offer) => offer.isFavorite);
  const favoriteCount = favoriteOffers.length;

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handleListItemHover = (offerId: string) => {
    const currentOffer = cityOffers.find((offer) => offer.id.toString() === offerId);
    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoriteCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onCityChange={handleCityChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                {' '}
                <span className="places__sorting-type" tabIndex={0}>
                                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferListCities
                offers={cityOffers}
                onListItemHover={handleListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" style={{ background: 'none' }}>
                <Map city={currentCity} offers={cityOffers} selectedPoint={selectedOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
