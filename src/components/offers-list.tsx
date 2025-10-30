import CitiesCard from './cities-card';
import { Offer } from '../types/offer';
import { MouseEvent } from 'react';

type OffersListProps = {
  offers: Offer[];
  onListItemHover?: (offerId: string) => void;
};

function OffersList({ offers, onListItemHover } : OffersListProps) : JSX.Element {
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
    <>
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          id={offer.id}
          city={offer.city}
          imageSrc={offer.imageSrc}
          title={offer.title}
          price={offer.price}
          rating={offer.rating}
          housingType={offer.housingType}
          isFavorite={offer.isFavorite}
          isPremium={offer.isPremium}
          onMouseEnter={handleListItemHover}
        />
      ))};
    </>
  );
}

export default OffersList;
