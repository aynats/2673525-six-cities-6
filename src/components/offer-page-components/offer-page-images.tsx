import React from 'react';
import { MaxOfferItems } from '../../const';


type OfferImagesProps = {
  images: string[];
};

function OfferImages({ images }: OfferImagesProps): JSX.Element {
  const limitedImages = images.slice(0, MaxOfferItems.MaxImagesCount);

  return (
    <div className='offer__gallery-container container'>
      <div className='offer__gallery'>
        {limitedImages.map((src) => (
          <div className='offer__image-wrapper' key={src}>
            <img className='offer__image' src={src} alt={'Offer photo'} />
          </div>
        ))}
      </div>
    </div>
  );
}

const MemoizedOfferImages = React.memo(OfferImages);
MemoizedOfferImages.displayName = 'OfferImages';

export default MemoizedOfferImages;
