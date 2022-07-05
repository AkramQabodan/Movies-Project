import { Component, OnInit } from '@angular/core';
import { movies } from 'app/interfaces/moviesinterface';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {

  trendingmovies:Array<movies>=[]
  
  constructor( private _ApiRequestService:ApiRequestService
  ) { }
  ngOnInit(): void {
    this._ApiRequestService.getTrendingMovies()
    this.trendingmovies = this._ApiRequestService.data.trendingPeople

    
  }
}
