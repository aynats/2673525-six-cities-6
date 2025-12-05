import React from 'react';

type OfferBookmarkButtonProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

function OfferFeatures({ type, bedrooms, maxAdults }: OfferBookmarkButtonProps): JSX.Element {
  return (
    <ul className='offer__features'>
      <li className='offer__feature offer__feature--entire'>
        {type}
      </li>
      <li className='offer__feature offer__feature--bedrooms'>
        {bedrooms} {bedrooms !== 1 ? 'Bedrooms' : 'Bedroom'}
      </li>
      <li className='offer__feature offer__feature--adults'>
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

const MemoizedOfferFeatures = React.memo(OfferFeatures);
MemoizedOfferFeatures.displayName = 'OfferFeatures';

export default MemoizedOfferFeatures;
