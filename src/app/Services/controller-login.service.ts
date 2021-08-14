import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControllerLoginService {
  //Modo de desarrollo
  //public apiUrl = 'http://localhost:5000/api/';

  //Modo de despliegue
  public apiUrl = 'https://alp-cloud.com:8452/api/';

  constructor( private http: HttpClient, public router: Router ) { }

  controlLog(token: string, username: string, option: number) {
    return this.http.get( this.apiUrl + 'Notes/getUserByToken/' + token + '/' + username + '/' + option  )
  }

  login(model: any[]) {
    return this.http.post(this.apiUrl + 'User_control_notes/savewebappuser/', model);
  }

  saveNotes(model: any[]) {
    return this.http.post( this.apiUrl + 'Notes/saveNotes', model );
  }

  getNotes( token: any, state:number ) {
    return this.http.get( this.apiUrl + 'Notes/getNotes/' + token + '/' + state );
  }

  delNotes(id:number, token:any) {
    return this.http.get( this.apiUrl + 'Notes/DelNotes/' + id + '/' + token );
  }

  putNotes(id:number, model:any[]) {
    return this.http.put( this.apiUrl + 'Notes/PutNotes/' + id, model );
  }

  controlSession(url: string) {
    if( sessionStorage.getItem('user') == undefined || sessionStorage.getItem('user') ) {
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate([`/${url}`]);
    }
  }


}
