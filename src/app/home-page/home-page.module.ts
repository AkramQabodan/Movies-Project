import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { HomeNavBarComponent } from './home-nav-bar/home-nav-bar.component';
import { TrendingTvComponent } from './trending-tv/trending-tv.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { PopularPeopleComponent } from './popular-people/popular-people.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { TvMediaCardComponent } from './tv-media-card/tv-media-card.component';
import { FavCardComponent } from './fav-card/fav-card.component';
import { LikeBarComponent } from './like-bar/like-bar.component';
import { LikesSidebarComponent } from './likes-sidebar/likes-sidebar.component';

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
  ],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
