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
    
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ]
})
export class HomePageModule { }
