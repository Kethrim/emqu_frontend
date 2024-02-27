import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IMensaje{
  msg:String
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private _url = 'http://127.0.0.1:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  ingresarSistema(correo:string, contra:string): Observable<IMensaje>{
    const params = {correo, contra};
    return this._http.post<IMensaje>(this._url+"/ingresar", params, {headers: this.headers});
  }

  registrarseSistema(correo:string, contra:string): Observable<IMensaje>{
    const params = {correo, contra};
    return this._http.post<IMensaje>(this._url+"/registrarse", params, {headers: this.headers});
  }
}
