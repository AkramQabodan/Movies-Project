import { AuthenticationService } from 'app/services/authentication.service';
import { RouterGuard } from './guards/router.guard';
// Main Modules:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersService } from './interceptors/features/headers.service';
// Main components:
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover.component';
import { StoreModule } from '@ngrx/store';
import { favReducer } from './store/fav/fav.reducer';
import { likeReducer } from './store/likes/likes.reducer';
import { NotFoundComponent } from './components/not-found/not-found.component';
// style Modules (PrimeModules):

@NgModule({
  declarations: [AppComponent, CoverComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ fav: favReducer, like: likeReducer }),
  ],
  providers: [
    RouterGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: HeadersService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
