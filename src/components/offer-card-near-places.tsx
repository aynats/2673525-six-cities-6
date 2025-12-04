import OfferCard from './offer-card-base.tsx';
import { type Offer } from '../types/offer';
import { MouseEvent } from 'react';
import React from 'react';

type OfferCardNearPlacesProps = {
  offer: Offer;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
};

function OfferCardNearPlaces({offer, onMouseEnter} : OfferCardNearPlacesProps) {
  return (
    <OfferCard
      className={'near-places'}
      onMouseEnter={onMouseEnter}
      offer={offer}
    />
  );
}

export default React.memo(OfferCardNearPlaces);