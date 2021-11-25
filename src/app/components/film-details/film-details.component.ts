import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Film } from 'src/app/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  film?: Film;
  onDestroy: EventEmitter<any>;

  constructor(private route: ActivatedRoute, private filmService: FilmService) {
    this.onDestroy = new EventEmitter();
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.onDestroy)).subscribe((params) => {
      const id = params['id'];
      this.filmService.getFilm(id).pipe(takeUntil(this.onDestroy)).subscribe(film => this.film = film);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.emit();
  }
}
