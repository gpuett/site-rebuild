import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { EditorPicksComponent } from './editor-picks/editor-picks.component';
import { BodyComponent } from './body/body.component';
import { MoviesComponent } from './movies/movies.component';
import { GamesComponent } from './games/games.component';
import { TvComponent } from './tv/tv.component';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    EditorPicksComponent,
    BodyComponent,
    MoviesComponent,
    GamesComponent,
    TvComponent,
    MusicComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
