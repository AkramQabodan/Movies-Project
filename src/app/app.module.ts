// Main Modules:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Main components:
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

// style Modules (PrimeModules):
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

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
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
