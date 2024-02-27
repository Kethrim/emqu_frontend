import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-equipo',
  templateUrl: './actualizar-equipo.component.html',
  styleUrls: ['./actualizar-equipo.component.css']
})
export class ActualizarEquipoComponent {
  dir_ip_equipo = "";
  actualizacionForm = new FormGroup({
    nombre: new FormControl(),
    dir: new FormControl()
  });

  constructor(private router: Router, private _equiposService: EquiposService){}

  ngOnInit(){
    this.dir_ip_equipo = this._equiposService.obtenerEquipoAct();
    this.cargarDatos();
  }

  cargarDatos(){
    this._equiposService.obtenerEquipo(this.dir_ip_equipo).subscribe(
      resp => {
        this.actualizacionForm.get("nombre")?.setValue(resp.nombre);
        this.actualizacionForm.get("dir")?.setValue(resp.dir);
      }
    )
  }

  redirigir(){
    this.router.navigate(['/gestion-equipos']);
  }


  onSubmit(){    
    this._equiposService.actualizarEquipo(this.actualizacionForm.value.dir, this.actualizacionForm.value.nombre).subscribe(
      resp => {
        Swal.fire({
          title: "Actualizado",
          icon: "success"
        }); 
        this.redirigir()
      }
    )
  }

}
