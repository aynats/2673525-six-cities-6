import OfferCard from './offer-card-base.tsx';
import { type Offer } from '../types/offer.ts';
import { MouseEvent } from 'react';
import React from 'react';

type OfferCardCitiesProps = {
  offer: Offer;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
};

function OfferCardCities({offer, onMouseEnter} : OfferCardCitiesProps) {
  return (
    <OfferCard
      className={'cities'}
      onMouseEnter={onMouseEnter}
      offer={offer}
    />
  );
}

export default React.memo(OfferCardCities);
