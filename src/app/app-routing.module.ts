import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCoverComponent } from './components/book-cover/book-cover.component';
import { BookPageComponent } from './components/book-page/book-page.component';

const routes: Routes = [
  { path: '', component: BookCoverComponent },
  { path: 'contents', component: BookPageComponent },
  { path: 'film/:id', component: BookPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
