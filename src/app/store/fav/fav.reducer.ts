import { movies } from 'app/interfaces/moviesinterface';
import { createReducer, on } from '@ngrx/store';
import { addWish, removeWish, getWishes } from './fav.actions';

export const initialState: Array<movies> = [];

export const favReducer = createReducer(
  initialState,
  on(addWish, (state, { Wish }) => {
    state = [...state, Wish];
    return state;
  }),
  on(removeWish, (state, { index }) => {
    state = [...state];
    state.splice(index, 1);
    return state;
  }),
  on(getWishes, (state) => state)
);
