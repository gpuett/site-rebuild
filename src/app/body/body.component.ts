import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../models/media.model';
import { Thumb } from '../models/thumb.model';
import { Movie } from '../models/movie.model';
import { Game } from '../models/game.model';
import { Show } from '../models/tv.model';
import { Album } from '../models/music.model';

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

  games: Game[] = [
    new Game("Jotun: Valhalla Edition","Sitch",75),
    new Game("BattleTech","PC",78),
    new Game("The Swords of Ditto","PS4",74),
    new Game("Gal*Gun 2","Switch",64),
    new Game("South Park: The Fractured But Whole","Switch",81),
    new Game("Nintendo Labo: Toycon 01 Variety Kit","Switch",76),
    new Game("Manticore: Galaxy on Fire","Switch",69),
    new Game("Yakuza 6: The Song of Life","PS4",83),
    new Game("Football Manager Touch 2018","Switch",76),
    new Game("Dead In Vinland","PC",79)
  ];

  shows: Show[] = [
    new Show("Sweetbitter: Season 1","Starz",48),
    new Show("Bobby Kennedy for President","Netflix",72),
    new Show("Genius (2017): Season 2","National Geographic",52),
    new Show("Elvis Presley: The Searcher","HBO",84),
    new Show("Rellik: Season 1","Cinemax",51),
    new Show("Lost in Space (2018): Season 1","Netflix",76),
    new Show("Andre the Giant: Season 1","HBO",76),
    new Show("Killing Eve: Season 1","BBC America",83),
    new Show("Howards End","Starz",86),
    new Show("Paterno","HBO",68),
  ];

  albums: Album[] = [
    new Album("World's Strongest Man","Gaz Coombes",83),
    new Album("Knock Knock","DJ Koze",83),
    new Album("The Horizon Laughed","Damien Jurado",72),
    new Album("Dove","Belly",71),
    new Album("Good Thing","Leon Bridges",74),
    new Album("Vive La Void","Vive La Void",71),
    new Album("Music for Installtions [Box Set]","Brian Eno",79),
    new Album("Panic Blooms","Black Moth Super Rainbow",69),
    new Album("Caer","Twin Shadow",67),
    new Album("Last Will Standing","Willie Nelson",81),
  ];
}
