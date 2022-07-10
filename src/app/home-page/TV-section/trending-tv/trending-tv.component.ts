import { LoaderService } from '../../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { tv } from 'app/interfaces/tvinterface';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-trending-tv',
  templateUrl: './trending-tv.component.html',
  styleUrls: ['./trending-tv.component.scss'],
})
export class TrendingTvComponent implements OnInit {
  trendingtv: Array<tv> = [];

  constructor(
    private _ApiRequestService: ApiRequestService,
    public _loader: LoaderService
  ) {}
  ngOnInit(): void {
    this._ApiRequestService.getTrendingTV().subscribe((res) => {
      this.trendingtv = res;
    });
  }
}
