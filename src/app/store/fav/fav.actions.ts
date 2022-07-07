import { createAction, props } from '@ngrx/store';
import { movies } from 'app/interfaces/moviesinterface';

export const addWish = createAction('Add a Wish', props<{ Wish: movies }>());
export const removeWish = createAction(
  'Remove a Wish',
  props<{ index: number }>()
);
export const getWishes = createAction(
  'Get all wishes',
  props<{ list: Array<movies> }>()
);
