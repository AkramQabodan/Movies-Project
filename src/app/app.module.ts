// Main Modules:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Main components:
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover.component';
import { StoreModule } from '@ngrx/store';
import { favReducer } from './store/fav/fav.reducer';


// style Modules (PrimeModules):
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ fav: favReducer }),
    InputTextModule,
    InputNumberModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
