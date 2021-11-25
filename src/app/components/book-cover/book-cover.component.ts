import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.scss']
})
export class BookCoverComponent implements OnInit {
  public currentApplicationVersion = environment.appVersion;
  
  constructor() { }

  ngOnInit(): void {
  }

}
