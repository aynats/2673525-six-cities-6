import OfferCard from './offer-card-base';
import { Offer } from '../types/offer';
import { MouseEvent } from 'react';
import OfferCardCities from './offer-card-cities';
import OfferCardNearPlaces from './offer-card-near-places';

type OfferListProps = {
  offers: Offer[];
  onListItemHover?: (offerId: string) => void;
  className: string;
  tabsContent: boolean;
};

const getComponentByType = (className: string, offer: Offer, onMouseEnter: (event: MouseEvent<HTMLElement>) => void) => {
  switch (className) {
    case 'cities':
      return (
        <OfferCardCities
          offer={offer}
          onMouseEnter={onMouseEnter}
        />
      );
    case 'near-places':
      return (
        <OfferCardNearPlaces
          offer={offer}
          onMouseEnter={onMouseEnter}
        />
      );
  }

  return <OfferCard offer={offer} />;
};

function OfferList({ offers, onListItemHover, className, tabsContent, } : OfferListProps) : JSX.Element {
  const handleListItemHover = (event: MouseEvent<HTMLElement>) => {
    if (!onListItemHover) {
      return;
    }
    event.preventDefault();
    const offerId = event.currentTarget.id;
    if (offerId) {
      onListItemHover(offerId);
    }
  };

  return (
    <div className={className === 'near-places'
      ? 'near-places__list places__list'
      : `${className}__places-list places__list${tabsContent ? ' tabs__content' : ''}`}
    >
      {offers.map((offer) => (
        <div key={offer.id}>
          {getComponentByType(className, offer, handleListItemHover)}
        </div>
      ))}
    </div>
  );
}

export default OfferList;
