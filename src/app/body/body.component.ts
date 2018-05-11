import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Thumb } from '../models/thumb.model';
import { Movie } from '../models/movie.model';
import { Game } from '../models/game.model';
import { Show } from '../models/tv.model';
import { Album } from '../models/music.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [MediaService]
})
export class BodyComponent implements OnInit, DoCheck {

  private user;

  constructor(private router: Router, private mediaService: MediaService) {  }


  movies: FirebaseListObservable<any[]>;
  thumbs: FirebaseListObservable<any[]>;
  games: FirebaseListObservable<any[]>;
  shows: FirebaseListObservable<any[]>;
  albums: FirebaseListObservable<any[]>;

  ngDoCheck() {
  this.user = firebase.auth().currentUser;
  }

  ngOnInit() {
    this.movies = this.mediaService.getMovies();
    this.thumbs = this.mediaService.getThumbs();
    this.games = this.mediaService.getGames();
    this.shows = this.mediaService.getShows();
    this.albums = this.mediaService.getAlbums();
  }

}
