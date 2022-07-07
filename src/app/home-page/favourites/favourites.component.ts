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
  }
}
