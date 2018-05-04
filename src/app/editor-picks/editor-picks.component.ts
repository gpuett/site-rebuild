import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../models/media.model';


@Component({
  selector: 'app-editor-picks',
  templateUrl: './editor-picks.component.html',
  styleUrls: ['./editor-picks.component.css']
})
export class EditorPicksComponent {
  @Input() childMedia: Media[];
  @Output() clickSender = new EventEmitter();



}
