import { Component } from '@angular/core';
import { Media } from './models/media.model';
import { Thumb } from './models/thumb.model';
import { EditorPicksComponent } from './editor-picks/editor-picks.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterMedia: Media[] = [
    new Media("METASCORE PREDICTIONS","Here are the predictions from over 4,500 Metacritic users for the final Metascores for summer's 30 biggest films.",'./../assets/metascore_predictions.png'),
    new Media("TULLY","Jason Reitman re-teams with his Juno screenwriter Diablo Cody for a new film that ranks among the director's best.",'./../assets/tully.jpg'),
    new Media("10 FILMS TO SEE IN MAY","Preview this month's top theatrical releases, including Deadpool 2 and Solo: A Star Wars Story.",'./../assets/preview.png'),
    new Media("DONKEY KONG COUNTRY","The 2014 Wii U platformer Tropical Freeze comes to the Switch this week in a new port that critics seem to like.",'./../assets/dk.jpg'),
  ];

}
