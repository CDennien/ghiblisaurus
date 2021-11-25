import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../film';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private ghibliURL = 'https://ghibliapi.herokuapp.com/films';

  constructor(private http:HttpClient) { }

  public getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.ghibliURL);
  }

  public getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.ghibliURL}/${id}`);
  }
}
