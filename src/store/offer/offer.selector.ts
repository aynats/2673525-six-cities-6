import { NameSpace } from "../../const";
import { State } from "../../types/state";

export const getCurrentOffer = (state: State) => state[NameSpace.Offer].offer;
export const getOfferReviews = (state: State) => state[NameSpace.Offer].reviews;
export const getNearbyOffers = (state: State) => state[NameSpace.Offer].nearby;