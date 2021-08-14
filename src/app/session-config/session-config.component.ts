import { Component, OnInit } from '@angular/core';
import { ControllerLoginService } from '../Services/controller-login.service';

@Component({
  selector: 'app-session-config',
  templateUrl: './session-config.component.html',
  styleUrls: ['./session-config.component.scss']
})
export class SessionConfigComponent implements OnInit {

  constructor( public sess: ControllerLoginService ) { }

  ngOnInit(): void {
  }

  shutDownSession() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.sess.controlSession('login');
  }

}
