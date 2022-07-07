import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { movies } from 'app/interfaces/moviesinterface';
import { addWish, removeWish } from 'app/store/fav/fav.actions';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input() input:any
  constructor(private _store: Store<{ fav:movies[] }> ) { }

  ngOnInit(): void {}
  //favourie
  check: boolean = false
  addToFav(wish: movies ,id:number ){
    if (this.check == false)  {
      this._store.dispatch(addWish({ Wish: wish }));
      this.check = true
    } else {
      this.check = false
      this._store.dispatch(removeWish({ Id:id }))
    }
  }
}
