import { LoaderService } from './../../../services/loader.service';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from 'app/services/api-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchQurey: any;
  searchResult: any;

  constructor(
    private _apiRequest: ApiRequestService,
    private _activeRouter: ActivatedRoute,
    public _loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.searchQurey = this._activeRouter.snapshot.paramMap.get('query');
    console.log(this.searchQurey);

    this._apiRequest.getSearch(this.searchQurey).subscribe((result) => {
      this.searchResult = result;
      console.log(result);
    });
  }
}