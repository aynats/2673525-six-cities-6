import {TypedUseSelectorHook, useSelector} from 'react-redux';
//import {State} from '../types/state';
import { RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
