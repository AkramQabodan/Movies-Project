import { Component, OnInit, Input } from '@angular/core';
import { movies } from 'app/interfaces/moviesinterface';
import { Store } from '@ngrx/store';
import { addLike, removeLike } from 'app/store/likes/likes.actions';
import { removeWish } from 'app/store/fav/fav.actions';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.scss'],
})
export class FavCardComponent implements OnInit {
  @Input() input: movies = {} as movies;

  liked: boolean = false;

  constructor(private _store: Store<{ fav: movies[]; like: movies[] }>) {}

  // remove from Favorites List >>
  removeFav(Id: number) {
    this._store.dispatch(removeWish({ Id }));
  }
  // Likes bar process >>
  like(like: movies, id: number) {
    if (this.liked == false) {
      this._store.dispatch(addLike({ Like: like }));
      this.liked = true;
    } else {
      this.liked = false;
      this._store.dispatch(removeLike({ Id: id }));
    }
  }
  ngOnInit(): void {}
}
