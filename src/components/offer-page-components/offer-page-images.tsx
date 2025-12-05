import React from "react";

type OfferImagesProps = {
  images: string[];
};

function OfferImages({ images }: OfferImagesProps): JSX.Element {
  return (
    <div className='offer__gallery-container container'>
      <div className='offer__gallery'>
        {images.map((src, index) => (
          <div className='offer__image-wrapper' key={index}>
            <img className='offer__image' src={src} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const MemoizedOfferImages = React.memo(OfferImages);
MemoizedOfferImages.displayName = 'OfferImages';

export default MemoizedOfferImages;
