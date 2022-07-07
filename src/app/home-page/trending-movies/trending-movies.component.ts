import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  trendingmovies:Array<movies>=[]
  
  constructor( private _ApiRequestService:ApiRequestService) { }
  ngOnInit(): void {
    this._ApiRequestService.getTrendingMovies().subscribe((res)=>{
        this.trendingmovies=res;
      },(error:any)=>{
        console.log("error")  
    })
>>>>>>> Development
  }

}
