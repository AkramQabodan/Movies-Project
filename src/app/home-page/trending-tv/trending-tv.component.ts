import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-tv',
  templateUrl: './trending-tv.component.html',
  styleUrls: ['./trending-tv.component.scss']
})
export class TrendingTvComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  trendingtv:Array<tv>=[]
  
  constructor( private _ApiRequestService:ApiRequestService
  ) { }
  ngOnInit(): void {
    this._ApiRequestService.getTrendingTV().subscribe((res)=>{
      this.trendingtv=res;
    },(error:any)=>{
      console.log("error")}
<<<<<<< HEAD

    )
    
>>>>>>> Development

  ngOnInit(): void {
=======
    )  
>>>>>>> Development
  }

}
