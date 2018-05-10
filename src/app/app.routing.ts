import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { GamesComponent } from './games/games.component';
import { TvComponent } from './tv/tv.component';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: 'music',
    component: MusicComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
