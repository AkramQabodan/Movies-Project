import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeCompComponent } from './Home-section/home-comp.component';
import { HomeNavBarComponent } from './Navigation-section/home-nav-bar/home-nav-bar.component';
import { TrendingTvComponent } from './TV-section/trending-tv/trending-tv.component';
import { TrendingMoviesComponent } from './Movies-section/trending-movies/trending-movies.component';
import { PopularPeopleComponent } from './People-section/popular-people/popular-people.component';
import { SearchBarComponent } from './Search-section/search-bar/search-bar.component';
import { NavBarComponent } from './Navigation-section/nav-bar/nav-bar.component';
import { FavouritesComponent } from './Favorites-section/favourites/favourites.component';
import { MediaCardComponent } from './Movies-section/movie-media-card/media-card.component';
import { PeopleCardComponent } from './People-section/people-card/people-card.component';
import { TvMediaCardComponent } from './TV-section/tv-media-card/tv-media-card.component';
import { FavCardComponent } from './Favorites-section/fav-card/fav-card.component';
import { LikeBarComponent } from './Likes-section/like-bar/like-bar.component';
import { LikesSidebarComponent } from './Likes-section/likes-sidebar/likes-sidebar.component';
import { ContentDetailsComponent } from './Details-section/content-details.component';
import { SearchResultsComponent } from './Search-section/search-results/search-results.component';

@NgModule({
  declarations: [
    HomeCompComponent,
    HomeNavBarComponent,
    TrendingTvComponent,
    TrendingMoviesComponent,
    PopularPeopleComponent,
    SearchBarComponent,
    NavBarComponent,
    FavouritesComponent,
    MediaCardComponent,
    PeopleCardComponent,
    TvMediaCardComponent,
    FavCardComponent,
    LikeBarComponent,
    LikesSidebarComponent,
    ContentDetailsComponent,
    SearchResultsComponent,
  ],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
