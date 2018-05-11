import { Component } from '@angular/core';
import { Pick } from './models/pick.model';
import { Thumb } from './models/thumb.model';
import { EditorPicksComponent } from './editor-picks/editor-picks.component';
import { BodyComponent } from './body/body.component';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {


}
