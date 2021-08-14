import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlclassstasksService {

  //Modo de desarrollo
  //public apiUrl = 'http://localhost:5000/api/';

  //Modo de despliegue
  public apiUrl = 'https://alp-cloud.com:8452/api/';

  constructor( private http: HttpClient ) { }

  getClassTasks(token: any) {
    return this.http.get( this.apiUrl + 'classtasks/getTasks/' + token )
  }

  postClassTasks( model: any [] ) {
    return this.http.post( this.apiUrl + 'classtasks/saveClassTasks', model )
  }

  putClassTasks( codec:string, token_user:string, model: any [] ) {
    return this.http.put( this.apiUrl + 'classtasks/PutClass/' + codec + '/' + token_user, model )
  }

  delClassTasks(token: string, names: string) {
    return this.http.get( this.apiUrl + 'classtasks/delTasks/' + token + '/' + names );
  }

  sumClassTasks( token: any, state: number, classtype: string ) {
    return this.http.get( this.apiUrl + 'Notes/getNotesSum/' + token + '/' + state + '/' + classtype );
  }

}
