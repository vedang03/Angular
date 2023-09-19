import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { InputMoviesComponent } from './input-movies/input-movies.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    InputMoviesComponent,
    DisplayMovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
