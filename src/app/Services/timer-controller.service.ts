import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimerControllerService {

  //Modo de desarrollo
  //public apiUrl = 'http://localhost:5000/api/';

  //Modo de despliegue
  public apiUrl = 'https://alp-cloud.com:8452/api/';

  constructor( private http: HttpClient, public router: Router ) { }

  postTimer( model:any[] ) {
    return this.http.post(this.apiUrl + 'Timer/saveNotes', model);
  }

  putTimer( id: number, model:any[]  ) {
    return this.http.post(this.apiUrl + 'Timer/PutTimers/' + id, model);
  }

  getTimer(token:string, id:number) {
    return this.http.get(this.apiUrl + 'Timer/getTimers/' + token + '/' + id);
  }

  delTimer(token:string, id:number) {
    return this.http.get(this.apiUrl + 'Timer/delTimers/' + token + '/' + id);
  }

}
