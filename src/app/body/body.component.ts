import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../models/media.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Output() clickSender = new EventEmitter();


}
