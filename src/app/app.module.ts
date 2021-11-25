import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { BookCoverComponent } from './components/book-cover/book-cover.component';
import { BookPageComponent } from './components/book-page/book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailsComponent,
    BookCoverComponent,
    BookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
