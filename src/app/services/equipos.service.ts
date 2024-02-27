import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IEquipo{  
  dir: String;
  nombre: String;
  msg: String;
}

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private _url = 'http://127.0.0.1:5000';
  private dir_ip_equipo:string = "";
  dir_ip = "";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private _http: HttpClient) { }
  
  /*
    Registra un equipo en el sistema
  */
    registrarEquipo(dir:any, nombre:any): Observable<IEquipo>{
      const params = JSON.stringify({
        'dir': dir,
        'nombre': nombre
      });
  
      return this._http.post<IEquipo>(this._url+"/registrar-equipo", params, {headers: this.headers});
    }

    /**
     * Guarda el equipo próximo a actualizar
     * @param dir dirección ipv4 del equipo a actualizar
     */
    asignarEquipoAct(dir:string){
      this.dir_ip_equipo = dir;
    }

    /**
     * Obtiene la dirección del equipo a actualizar
     */
    obtenerEquipoAct(): string{
      return this.dir_ip_equipo;
    }

    /*
    Actualiza un equipo en el sistema mediante su direccion ip
  */
    actualizarEquipo(dir:string, nombre:string): Observable<IEquipo>{
      const params = JSON.stringify({
        'dir': dir,
        'nombre': nombre
      });
  
      return this._http.put<IEquipo>(this._url+"/actualizar-equipo", params, {headers: this.headers});
    }

    /*
    Elimina un equipo en el sistema mediante su direccion ip
  */
    eliminarEquipo(dir:string): Observable<IEquipo>{
      const params = {dir};
      return this._http.delete<IEquipo>(this._url+"/eliminar-equipo", {headers: this.headers, body: params});
    }

    /*
    Obtiene los equipos que hay en el sistema
  */
    async obtenerEquipos(): Promise<IEquipo[] | undefined>{  
      return this._http.get<IEquipo[]>(this._url+"/obtener-equipos").toPromise()
    }

    /*
    Obtiene la información de un equipo dada su dirección ip
  */
    obtenerEquipo(dir:string): Observable<IEquipo>{        
      return this._http.get<IEquipo>(this._url+"/obtener-equipo/"+dir);
    }

    /*
    Prueba de latencia a un equipo
  */
    probarLatencia(dir:string): Observable<IEquipo>{  
      const params = {dir};
      return this._http.post<IEquipo>(this._url+"/probar-latencia", params, {headers: this.headers});
    }    

}

