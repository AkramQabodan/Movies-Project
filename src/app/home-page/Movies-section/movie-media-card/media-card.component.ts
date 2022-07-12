import { LoaderService } from '../../../services/loader.service';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { movies } from 'app/interfaces/moviesinterface';
import { addWish, removeWish } from 'app/store/fav/fav.actions';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {
  check: boolean = false;
  @Input() input: movies = {} as movies;

  constructor(
    private _store: Store<{ fav: movies[] }>,
    public _loader: LoaderService
  ) {}

  addToFav(wish: movies, id: number) {
    if (this.check == false) {
      this._store.dispatch(addWish({ Wish: wish }));
      this.check = true;
    } else {
      this.check = false;
      this._store.dispatch(removeWish({ Id: id }));
    }
  }
  ngOnInit(): void {
    this._store.select('fav').subscribe((res) => {

      const chosenItem = res.find((media) => {
        console.log("input",this.input.id,"media",media.id)
        return this.input.id == media.id;
      });
      console.log(chosenItem);
      if (chosenItem) {
        this.check == true;
        console.log('hi');
      }
    });
  }
}
