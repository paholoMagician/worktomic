import { Component, OnInit } from '@angular/core';
import { VapidKeysService } from './Services/vapid-keys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fnotes';

  ngOnInit( ) {
    this.pushNotes();
  }

  constructor( public vapkey: VapidKeysService ) {}

  pushNotes() {
    this.vapkey.subscribeToNotifications();
  }

}
