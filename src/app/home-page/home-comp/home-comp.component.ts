import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.scss'],
})
export class HomeCompComponent implements OnInit {
  constructor(private _ApiRequestService: ApiRequestService) {}

  ngOnInit(): void {
    this._ApiRequestService.getTrendingMovies().subscribe((data) => {
      console.log('movies', data);
    });
    this._ApiRequestService.getTrendingPeople().subscribe((data) => {
      console.log('people', data);
    });
    this._ApiRequestService.getTrendingTV().subscribe((data) => {
      console.log('tv', data);
    });
    setTimeout(() => {
      console.log(this._ApiRequestService.data.trendingMovies);
      // console.log(this._ApiRequestService.data.trendingPeople);
      // console.log(this._ApiRequestService.data.trendingTV);
    }, 5000);
  }
}
