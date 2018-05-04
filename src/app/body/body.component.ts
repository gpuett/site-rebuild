import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../models/media.model';
import { Thumb } from '../models/thumb.model';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Output() clickSender = new EventEmitter();
  thumbs: Thumb[] = [
    new Thumb("The 12th Man",79,'../assets/12th.jpg'),
    new Thumb("Tully",77,'../assets/tully2.jpg'),
    new Thumb("Manhunt",70,'../assets/manhunt.jpg'),
    new Thumb("Avengers: Infinity War",68,'../assets/avengers.jpg'),
    new Thumb("Overboard",45,'../assets/overboard.jpg')
  ];

  movies: Movie[] = [
    new Movie("Bad Samaritan","R",44),
    new Movie("Traffik","R",37),
    new Movie("Super Troopers 2","R",40),
    new Movie("I Feel Pretty","PG-13",48),
    new Movie("Sgt. Stubby: An American Hero","PG",57),
    new Movie("Rampage","PG-13",45),
    new Movie("Blumhouse's Truth or Dare","PG-13",35),
    new Movie("Beirut","R",69),
    new Movie("A Quiet Place","PG-13",82),
    new Movie("Blockers","R",69),
  ];
}
