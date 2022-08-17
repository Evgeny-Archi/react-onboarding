import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { AppState, AppDispatch } from '../types/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatcher = () => useDispatch<AppDispatch>();
