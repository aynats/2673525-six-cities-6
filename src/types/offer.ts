import { Location } from './location';

export type Offer = {
  id: number;
  location: Location;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  imageSrc: string[];
  title: string;
  description: string[];
  rating: number;
  housingType: 'Apartament' | 'Room';
  bedroomCount: number;
  adultsCount: number;
  price: number;
  benefits: OfferBenefits;
  host: Host;
  isPremium?: boolean;
  isFavorite?: boolean;
};

type OfferBenefits = string[];

type Host = {
    name: string;
    photo: string;
    isPremium?: boolean;
};
