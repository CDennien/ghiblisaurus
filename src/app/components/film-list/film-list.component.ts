import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/film';
import { FilmService } from 'src/app/services/film.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  public films: Film[];
  public version: string = "1.0.0";

  constructor(private filmService: FilmService) { 
    this.films = []
  }

  ngOnInit(): void {
    this.getFilms();
  }

  private getFilms(): void {
    this.filmService.getFilms().subscribe(films => this.films = films)
  }
}
