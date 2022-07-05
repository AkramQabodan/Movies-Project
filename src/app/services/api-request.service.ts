import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  key: string = '6e17bd4768b3f5848c1d3b05fd8cadd9';
  data: { trendingPeople: {}[]; trendingMovies: {}[]; trendingTV: {}[] } = {
    trendingPeople: [],
    trendingMovies: [],
    trendingTV: [],
  };
  constructor(private http: HttpClient) {}

  getTrendingPeople() {
    this.http
      .get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${this.key}`
      )
      .pipe(map((data: any) => data.results))
      .subscribe(
        (data) => {
          this.data.trendingPeople = data;
          console.log(data);
        },
        (error) => {
          alert('failed to load data! please try again later');
        }
      );
  }
  getTrendingMovies() {
    this.http
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${this.key}`)
      .pipe(map((data: any) => data.results))
      .subscribe(
        (data) => {
          this.data.trendingPeople = data;
          console.log(data);
        },
        (error) => {
          alert('failed to load data! please try again later');
        }
      );
  }
  getTrendingTV() {
    this.http
      .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${this.key}`)
      .pipe(map((data: any) => data.results))
      .subscribe(
        (data) => {
          this.data.trendingPeople = data;
          console.log(data);
        },
        (error) => {
          alert('failed to load data! please try again later');
        }
      );
  }
}
