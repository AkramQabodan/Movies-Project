import { ContentDetailsComponent } from './Details-section/content-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { matchingURL } from 'app/services/api-request.service';

import { FavouritesComponent } from './Favorites-section/favourites/favourites.component';
import { HomeCompComponent } from './Home-section/home-comp.component';
import { PopularPeopleComponent } from './People-section/popular-people/popular-people.component';
import { TrendingMoviesComponent } from './Movies-section/trending-movies/trending-movies.component';
import { TrendingTvComponent } from './TV-section/trending-tv/trending-tv.component';
import { SearchResultsComponent } from './Search-section/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCompComponent,
    children: [
      { path: '', redirectTo: 'trendMovies', pathMatch: 'full' },
      { path: 'trendMovies', component: TrendingMoviesComponent },
      { path: 'trendTv', component: TrendingTvComponent },
      { path: 'trendPeople', component: PopularPeopleComponent },
    ],
  },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'search/:query', component: SearchResultsComponent },
  { matcher: matchingURL, component: ContentDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
