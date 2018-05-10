import { Injectable } from '@angular/core';
import { Media } from './models/media.model';
import { Thumb } from './models/thumb.model';
import { Movie } from './models/movie.model';
import { Game } from './models/game.model';
import { Show } from './models/tv.model';
import { Album } from './models/music.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MediaService {

  movies: FirebaseListObservable<any[]>;
  thumbs: FirebaseListObservable<any[]>;
  games: FirebaseListObservable<any[]>;
  shows: FirebaseListObservable<any[]>;
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.movies = database.list('media/1/movies');
    this.thumbs = database.list('media/0/thumbs');
    this.games = database.list('media/2/games');
    this.shows = database.list('media/3/shows');
    this.albums = database.list('media/4/albums');
  }

  getMovies() {
    return this.movies;
  }
  getThumbs() {
    return this.thumbs;
  }
  getGames() {
    return this.games;
  }
  getShows() {
    return this.shows;
  }
  getAlbums() {
    return this.albums;
  }

}
