import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CoverComponent } from './components/cover/cover.component';
import { HomeComponent } from './components/home/home.component';
import { HomeNavBarComponent } from './components/home/home-nav-bar/home-nav-bar.component';
import { TrendingMoviesComponent } from './components/home/trending-movies/trending-movies.component';
import { TrendingTvComponent } from './components/home/trending-tv/trending-tv.component';
import { StoreModule } from '@ngrx/store';
import { favReducer } from './store/fav/fav.reducer';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CoverComponent,
    HomeComponent,
    HomeNavBarComponent,
    TrendingMoviesComponent,
    TrendingTvComponent,
    MediaCardComponent,
    PeopleCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ fav: favReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
