import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LatenciaService {

  constructor(private _http:HttpClient) { } 
  
  
  public obtenerEsteEquipo()  
  {  
    return this._http.get("http://api.ipify.org/?format=json");  
  }  

  public  probarLatencia(direccion:string){    

  }

  public update(progress: any, total: any) {
    console.log(progress, '/', total);
  }
}
