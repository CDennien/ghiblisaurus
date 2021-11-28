import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import {Component, EventEmitter, OnInit} from '@angular/core';
import { Film } from 'src/app/film';
import { FilmService } from 'src/app/services/film.service';
import { environment } from 'src/environments/environment';
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  public films: Film[];
  public version: string = "1.0.0";
  onDestroy: EventEmitter<any>;

  constructor(private filmService: FilmService) {
    this.onDestroy = new EventEmitter();
    this.films = []
  }

  ngOnInit(): void {
    this.getFilms();
  }

  ngOnDestroy(): void {
    this.onDestroy.emit();
  }

  private getFilms(): void {
    this.filmService.getFilms().pipe(takeUntil(this.onDestroy)).subscribe(films => this.films = films)
  }
}
