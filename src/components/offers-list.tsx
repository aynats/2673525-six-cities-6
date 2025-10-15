import CitiesCard from './cities-card';
import { Offer } from '../types/offer';
import { useState } from 'react';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers } : OffersListProps) : JSX.Element {

  const [, setActiveCardId] = useState<number | null>(null);

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
          onMouseEnter={
            () => {
              setActiveCardId(offer.id);
            }
          }
          onMouseLeave={
            () => {
              setActiveCardId(null);
            }
          }
        />
      ))}
    </>
  );
}

export default OffersList;
