import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import { Link, useParams } from 'react-router-dom';
import Form from '../../components/form';
import ReviewsList from '../../components/reviews-list';
import { ReviewType } from '../../types/review';
import Map from '../../components/map';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import OfferListNearPlaces from '../../components/offer-list-near-places';
import OfferDescription from './offer-description';

type OfferPageProps = {
  reviews: ReviewType[];
  offers: Offer[];
}

function OfferPage({reviews, offers} : OfferPageProps): JSX.Element {
  const { id } = useParams();
  const offerId = Number(id);

  const offerReviews = reviews.filter((review) => review.offerId === offerId);

  const currentOffer = offers.find((offer) => offer.id === offerId);
  const nearbyOffers = offers.filter((offer) => offer.id !== offerId).slice(0, 3);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const handleListItemHover = (hoveredOfferId: string) => {
    const currentHoveredOffer = offers.find((offer) => offer.id.toString() === hoveredOfferId);
    setSelectedOffer(currentHoveredOffer);
  };

  const city = currentOffer
    ? currentOffer.city
    : {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      },
    };

  if (!currentOffer) {
    return <div>Offer not found</div>;
  }

  return (
    <div className='page'>
      <Helmet>
        <title>{'6 cities — offer'}</title>
      </Helmet>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Link className='header__logo-link' to={AppRoute.Root}>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </Link>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href='#'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'>
                    </div>
                    <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    <span className='header__favorite-count'>3</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>


      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              <div className='offer__image-wrapper'>
                <img className='offer__image' src='img/room.jpg' alt='Photo studio' />
              </div>
              <div className='offer__image-wrapper'>
                <img className='offer__image' src='img/apartment-01.jpg' alt='Photo studio' />
              </div>
              <div className='offer__image-wrapper'>
                <img className='offer__image' src='img/apartment-02.jpg' alt='Photo studio' />
              </div>
              <div className='offer__image-wrapper'>
                <img className='offer__image' src='img/apartment-03.jpg' alt='Photo studio' />
              </div>
              <div className='offer__image-wrapper'>
                <img className='offer__image' src='img/studio-01.jpg' alt='Photo studio' />
              </div>
              <div className='offer__image-wrapper'>
                <img className='offer__image' src='img/apartment-01.jpg' alt='Photo studio' />
              </div>
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {currentOffer && <OfferDescription offer={currentOffer}/>}
              <section className='offer__reviews reviews'>
                <ReviewsList reviews={offerReviews}/>
                <Form/>
              </section>
            </div>
          </div>
          <section className='offer__map map' style={{ background: 'none' }}>
            <Map city={city} offers={nearbyOffers} selectedPoint={selectedOffer} />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <OfferListNearPlaces
              offers={nearbyOffers}
              onListItemHover={handleListItemHover}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
