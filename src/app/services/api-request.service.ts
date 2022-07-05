import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  key: string = '6e17bd4768b3f5848c1d3b05fd8cadd9';
  baseImgURL: string = 'https://image.tmdb.org/t/p';
  imgSize: string = '/original';

  //url params for change languages
  arabic: string = 'ar';
  english: string = 'en-US';

  constructor(private http: HttpClient) {}

  getTrendingPeople(lang: string) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${this.key}`
      )
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((movie: any) => {
            return {
              ...movie,
              profile_path: `${this.baseImgURL}${this.imgSize}${movie.profile_path}`,
            };
          });
        })
      );
  }
  getTrendingMovies(lang: string) {
    return this.http
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${this.key}`)
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((movie: any) => {
            return {
              ...movie,
              poster_path: `${this.baseImgURL}${this.imgSize}${movie.poster_path}`,
            };
          });
        })
      );
  }
  getTrendingTV(lang: string) {
    return this.http
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${this.key}`)
      .pipe(
        map((data: any) => data.results),
        map((item) => {
          return item.map((tv: any) => {
            return {
              ...tv,
              poster_path: `${this.baseImgURL}${this.imgSize}${tv.poster_path}`,
            };
          });
        })
      );
  }
}
