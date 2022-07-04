import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './fav.actions';

export const initialState = 0;

export const favReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
