import { LoaderService } from '../../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { popular } from 'app/interfaces/popularinteface';
import { ApiRequestService } from 'app/services/api-request.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss'],
})
export class PopularPeopleComponent implements OnInit {
  trendingpeople: Array<popular> = [];

  constructor(
    private _ApiRequestService: ApiRequestService,
    private _route: ActivatedRoute,
    public _loader: LoaderService
  ) {}

  ngOnInit(): void {
    this._ApiRequestService.getTrendingPeople().subscribe((res) => {
      for (const person of res) {
        this.trendingpeople.push(person);
      }
    });
    this._route.params.subscribe((params) => {
      if (params['searchterm'])
        this.trendingpeople.filter((person) =>
          person.name.toLowerCase().includes(params['searchterm'].toLowerCase())
        );
      else this.trendingpeople;
    });
  }
}
