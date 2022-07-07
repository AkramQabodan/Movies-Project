import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { popular } from 'app/interfaces/popularinteface';
import { ApiRequestService } from 'app/services/api-request.service';
// import { ActivatedRoute } from '@angular/router';
>>>>>>> Development
@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss'],
})
export class PopularPeopleComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }
=======
  trendingpeople: Array<popular> = [];

  people:Array<popular> =[]
  constructor(
    private _ApiRequestService: ApiRequestService,
    // private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this._route.params.subscribe(params =>{
    //   if (params.searchterm) 
    //   this.people = this.trendingpeople.getAll()
    // })
    this._ApiRequestService.getTrendingPeople().subscribe(
      (res) => {
        console.log('res');
        for (const product of res) {
          this.trendingpeople.push(product);
        }
      },
>>>>>>> Development

      (err: any) => {
        console.log('error');
      }
    );
  }
}
