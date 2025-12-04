import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import Form from '../../components/form';
import Map from '../../components/map';
import OfferListNearPlaces from '../../components/offer-list-near-places';
import ReviewsList from '../../components/reviews-list';
import OfferDescription from './offer-description';

import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { getCurrentOffer, getOfferReviews, selectMapOffers, selectTopNearbyOffers } from '../../store/offer/offer.selector';

function OfferPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearbyAction(id));
    }
  }, [id, dispatch]);

  const currentOffer = useAppSelector(getCurrentOffer);

  const offerReviews = useAppSelector(getOfferReviews);
  const nearbyOffers = useAppSelector(selectTopNearbyOffers);

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

  const mapOffers = useAppSelector(selectMapOffers);

  const memoizedNearbyOffers = useMemo(
    () => nearbyOffers,
    [nearbyOffers]
  );

  if (!currentOffer) {
    return <div>Offer not found</div>;
  }

  return (
    <div className='page'>
      <Helmet>
        <title>{'6 cities — offer'}</title>
      </Helmet>

      <Header />

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
              {currentOffer && <OfferDescription offer={currentOffer} />}
              <section className='offer__reviews reviews'>
                <ReviewsList reviews={offerReviews} />
                <Form />
              </section>
            </div>
          </div>
          <section className='offer__map map' style={{ background: 'none' }}>
            <Map city={city} offers={mapOffers} selectedPoint={currentOffer} />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <OfferListNearPlaces offers={memoizedNearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
