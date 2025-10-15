export type Offer = {
  id: number;
  city: 'Amsterdam' | 'Paris' | 'Cologne' | 'Brussels' | 'Hamburg' | 'Dusseldorf';
  imageSrc: string[];
  title: string;
  description: string;
  rating: number;
  type: 'Apartament' | 'Room';
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
