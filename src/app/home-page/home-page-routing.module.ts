import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { PopularPeopleComponent } from './popular-people/popular-people.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { TrendingTvComponent } from './trending-tv/trending-tv.component';

const routes: Routes = [
  {path:'',component:HomeCompComponent,
children:[
  {path:'', redirectTo:'trendMovies', pathMatch:'full' },
  {path:'trendMovies',component:TrendingMoviesComponent},
  {path:'trendTv',component:TrendingTvComponent},
  {path:'trendPeople',component:PopularPeopleComponent},
  {path:'trendPeople/:searchterm',component:PopularPeopleComponent }
]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
