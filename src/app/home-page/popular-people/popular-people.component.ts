import { Component, OnInit } from '@angular/core';
import { popular } from 'app/interfaces/popularinteface';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss']
})
export class PopularPeopleComponent implements OnInit {
  trendingpeople:Array<popular>=[]
  
  constructor( private _ApiRequestService:ApiRequestService
  ) { }
  ngOnInit(): void {
    this._ApiRequestService.getTrendingPeople()
    this.trendingpeople = this._ApiRequestService.data.trendingPeople
  }

}
