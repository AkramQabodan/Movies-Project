import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { movies } from 'app/interfaces/moviesinterface';
import { removeWish, deleteWishes } from 'app/store/fav/fav.actions';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favoriteList: movies[] = [];

  constructor(private _store: Store<{ fav: movies[] }>) {}

  ngOnInit(): void {
    this._store.select('fav').subscribe((res) => {
      this.favoriteList = res;
    });
    console.log(this.favoriteList);
  }
  removeFav(Id: number) {
    this._store.dispatch(removeWish({ Id }));
  }
  liked: boolean = false;
  likedFn(fav: HTMLElement) {
    if (this.liked == false) {
      this.liked = true;
      fav.className = 'text-danger';
    } else {
      this.liked = false;
      fav.className = 'text-muted';
    }
  }
  Reset(list: movies[]) {
    this._store.dispatch(deleteWishes({ list }));
  }
}
