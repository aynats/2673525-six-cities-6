import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import Form from '../../components/form';
import Map from '../../components/map';
import OfferListNearPlaces from '../../components/offer-list/offer-list-near-places';
import ReviewsList from '../../components/reviews-list';
import OfferDescription from '../../components/offer-page-components/offer-page-description';
import OfferImages from '../../components/offer-page-components/offer-page-images';

import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { getCurrentOffer, getOfferReviews, selectMapOffers, selectTopNearbyOffers } from '../../store/offer/offer.selector';
import { DEFAULT_CITY } from '../../const';

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

  const city = currentOffer?.city ?? DEFAULT_CITY;
  const mapOffers = useAppSelector(selectMapOffers);

  const memoizedNearbyOffers = useMemo(
    () => nearbyOffers,
    [nearbyOffers]
  );

  const images = currentOffer?.images ?? [];

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
          <OfferImages images={images} />
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
