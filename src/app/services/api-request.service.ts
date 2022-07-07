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
  isEnglish: boolean = true;
  private arabic: string = 'ar';
  private english: string = 'en-US';

  constructor(private http: HttpClient) {}

  modifyQuery(string: string) {
    return string.trim().replace(' ', '-');
  }

  getTrendingPeople() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}&page=1`
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
  getTrendingMovies() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          this.key
        }&language=${this.isEnglish ? this.english : this.arabic}&page=1`
      )
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
  getTrendingTV() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${this.key}&language=${
          this.isEnglish ? this.english : this.arabic
        }&page=1`
      )
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

  getSearch(query: string) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          this.key
        }&language=${
          this.isEnglish ? this.english : this.arabic
        }&page=1&include_adult=false&query=${this.modifyQuery(query)}`
      )
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
  setLanguageArabic(): void {
    this.isEnglish = false;
  }
  setLanguageEnglish(): void {
    this.isEnglish = true;
  }
}
