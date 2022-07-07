import { addWish, removeWish, getWishes } from './fav.actions';
import { movies } from 'app/interfaces/moviesinterface';
import { createReducer, on } from '@ngrx/store';

export const initialState: Array<movies> = [];

export const favReducer = createReducer(
  initialState,
  on(addWish, (state, { Wish }) => {
    state = [...state, Wish];
    console.log(state);
    return state;
  }),
  on(removeWish, (state, { Id }) => {
    state = [...state];
    state = state.filter((movie) => {
      return movie.id !== Id;
    });
    console.log(state);
    return state;
  }),
  on(getWishes, (state) => state)
);
