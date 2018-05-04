import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../models/media.model';


@Component({
  selector: 'app-editor-picks',
  templateUrl: './editor-picks.component.html',
  styleUrls: ['./editor-picks.component.css']
})
export class EditorPicksComponent {
  // @Input() childMedia: Media[];
  @Output() clickSender = new EventEmitter();

  editorMedia: Media[] = [
    new Media("METASCORE PREDICTIONS","Here are the predictions from over 4,500 Metacritic users for the final Metascores for summer's 30 biggest films.",'./../assets/metascore_predictions.png', './../assets/favorable.png', "??"),
    new Media("TULLY","Jason Reitman re-teams with his Juno screenwriter Diablo Cody for a new film that ranks among the director's best.",'./../assets/tully.jpg','./../assets/favorable.png',"77"),
    new Media("10 FILMS TO SEE IN MAY","Preview this month's top theatrical releases, including Deadpool 2 and Solo: A Star Wars Story.",'./../assets/preview.png','http://www.metacritic.com/images/buttons/hpb/Article-00.png', "" ),
    new Media("DONKEY KONG COUNTRY","The 2014 Wii U platformer Tropical Freeze comes to the Switch this week in a new port that critics seem to like.",'./../assets/dk.jpg','./../assets/favorable.png',"87" ),
  ];

}
