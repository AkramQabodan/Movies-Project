import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.scss'],
})
export class HomeCompComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {
    console.log(this._router.url);
  }
}
