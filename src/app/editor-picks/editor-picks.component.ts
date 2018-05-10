import { Component, OnInit } from '@angular/core';
import { Pick } from '../models/pick.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-editor-picks',
  templateUrl: './editor-picks.component.html',
  styleUrls: ['./editor-picks.component.css'],
  providers: [MediaService]
})
export class EditorPicksComponent implements OnInit {

  constructor(private router: Router, private mediaService: MediaService) { }

  picks: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.picks = this.mediaService.getPicks();
  }

}
