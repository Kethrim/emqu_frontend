import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IRegistroHistorial{
  id_hist: BigInteger;  
  ip: String;
  equipo_dir: String;
  fecha: String;
  msg:String
}

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private _url = 'http://127.0.0.1:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  agregarRegistro(equipo_origen:string, equipo_prueba:string): Observable<IRegistroHistorial>{
    const params = JSON.stringify({
      'equipo_dir': equipo_prueba,
      'ip': equipo_origen
    });

    return this._http.post<IRegistroHistorial>(this._url+"/agregar-registro", params, {headers: this.headers});
  }
}
