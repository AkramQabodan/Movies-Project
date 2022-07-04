import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';
import { HomeComponent } from './components/home/home.component';
import { PopularPeopleComponent } from './components/home/popular-people/popular-people.component';
import { TrendingMoviesComponent } from './components/home/trending-movies/trending-movies.component';
import { TrendingTvComponent } from './components/home/trending-tv/trending-tv.component';

const routes: Routes = [
  {path:'',component:CoverComponent}, 
  {path:'home',component: HomeComponent},
  {path:'trendMovies',component: TrendingMoviesComponent},
  {path:'trendTv',component:TrendingTvComponent},
  {path:'trendPeople',component: PopularPeopleComponent},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
