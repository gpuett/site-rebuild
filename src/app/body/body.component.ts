import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../models/media.model';
import { Thumb } from '../models/thumb.model';

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
}
