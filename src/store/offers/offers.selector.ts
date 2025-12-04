import { NameSpace } from "../../const";
import { State } from "../../types/state";

export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].isOffersDataLoading;
