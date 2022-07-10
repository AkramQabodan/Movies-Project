import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss'],
})
export class ContentDetailsComponent implements OnInit {
  mediaID: any;
  mediaDetails: any = {};

  constructor(
    private _activeMedia: ActivatedRoute,
    private _apiRequest: ApiRequestService
  ) {}

  ngOnInit(): void {
    this.mediaID = this._activeMedia.snapshot.url[3].path;
    console.log(this.mediaID);

    switch (this._activeMedia.snapshot.url[1].path) {
      case 'movie':
        this._apiRequest.getMovieDetails(this.mediaID).subscribe((result) => {
          this.mediaDetails = result;
          console.log(result, this.mediaID);
        });
        break;
      case 'tv':
        this._apiRequest.getTVDetails(this.mediaID).subscribe((result) => {
          this.mediaDetails = result;
          console.log(result, this.mediaID);
        });
        break;
      case 'person':
        this._apiRequest.getPersonDetails(this.mediaID).subscribe((result) => {
          this.mediaDetails = result;
          console.log(result, this.mediaID);
        });
        break;
      default:
        console.log('No such media type');
        break;
    }
  }
}
