import { Component, OnInit } from '@angular/core';
import { popular } from 'app/interfaces/popularinteface';
import { ApiRequestService } from 'app/services/api-request.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss'],
})
export class PopularPeopleComponent implements OnInit {
  trendingpeople: Array<popular> = [];

  // people:Array<popular> =[]
  constructor(
    private _ApiRequestService: ApiRequestService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
 
    this._ApiRequestService.getTrendingPeople().subscribe(
      (res) => {
        console.log('res');
        for (const person of res) {
          this.trendingpeople.push(person);
        }
      },

      (err: any) => {
        console.log('error');
      }
    );
    this._route.params.subscribe(params =>{
      if (params['searchterm']) 
        this.trendingpeople.filter(person=> person.name.toLowerCase().includes(params['searchterm'].toLowerCase()))
      else
      this.trendingpeople
      // console.log ( this.trendingpeople.filter(person=> person.name.toLowerCase()))
      // console.log(params['searchterm']);
      
    })
    // console.log(this.people);
   console.log (this.trendingpeople)
 
    
    
  }
}
