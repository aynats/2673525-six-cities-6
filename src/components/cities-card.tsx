import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { getOfferRoute } from '../const';
import { MouseEvent } from 'react';

type CitiesCardProps = Pick<Offer,
  'id' |
  'city' |
  'imageSrc' |
  'title' |
  'price' |
  'rating'|
  'housingType' |
  'isFavorite' |
  'isPremium'
> & {
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
};

function CitiesCard({id, imageSrc, price, rating, title, housingType, isPremium, isFavorite, onMouseEnter, }: CitiesCardProps): JSX.Element {
  const mainPhoto = imageSrc[0] || '';
  const offerRoute = getOfferRoute(id);

  return (
    <article
      id={id.toString()}
      className="cities__card place-card"
      onMouseEnter={onMouseEnter}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}

      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to ={offerRoute}>
          <img className='place-card__image' src={mainPhoto} width='260' height='200' alt='Place image'/>
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            {' '}
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active ' : ''}button`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${rating * 20}%`}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={offerRoute}>{title}</Link>
        </h2>
        <p className='place-card__type'>{housingType}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
