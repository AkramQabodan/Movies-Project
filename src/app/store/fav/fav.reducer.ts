import { addWish, removeWish, getWishes } from './fav.actions';
import { movies } from 'app/interfaces/moviesinterface';
import { createReducer, on } from '@ngrx/store';
<<<<<<< HEAD
=======
import { addWish, removeWish, getWishes, deleteWishes } from './fav.actions';
>>>>>>> Development

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
<<<<<<< HEAD
    console.log(state);
=======
>>>>>>> Development
    return state;
  }),
  on(getWishes, (state) => state),
  on(deleteWishes, (state)=>{
    state=[];
    console.log(state)
     return state})
);
<<<<<<< HEAD
=======


>>>>>>> Development
