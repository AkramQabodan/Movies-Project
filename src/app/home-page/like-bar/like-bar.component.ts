import { Component, OnInit, Input } from '@angular/core';
import { movies } from 'app/interfaces/moviesinterface';
import { Store } from '@ngrx/store';
import { removeLike } from 'app/store/likes/likes.actions';

@Component({
  selector: 'app-like-bar',
  templateUrl: './like-bar.component.html',
  styleUrls: ['./like-bar.component.scss'],
})
export class LikeBarComponent implements OnInit {
  @Input() input: movies = {} as movies;

  constructor(private _store: Store<{ like: movies[] }>) {}

  removeFromList(id: number) {
    this._store.dispatch(removeLike({ Id: id }));
  }
  ngOnInit(): void {}
}
