import { Component, ViewChild } from '@angular/core';
import { EQUIPOS } from 'src/app/mocks/mock-equipo';
import { Equipo } from 'src/app/Equipo';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { LatenciaService } from 'src/app/services/latencia.service';
import { EquiposService } from 'src/app/services/equipos.service';
import { HistorialService } from 'src/app/services/historial.service';


@Component({
  selector: 'app-gestion-equipos',
  templateUrl: './gestion-equipos.component.html',
  styleUrls: ['./gestion-equipos.component.css'],
})
export class GestionEquiposComponent { 
  private source = interval(3000); 
  
  ip_actual : string = "";
  equipos = EQUIPOS;
  selectedIPV4?: Equipo;
  dataSource:any;
  displayedColumns: string[] = [
    'nombre',
    'dir',
    'Latencia',
    'Editar',
    'Eliminar',
  ];
  agregarEquipoForm = new FormGroup({
    nombre: new FormControl(),
    dir: new FormControl()
  });

  constructor(private router: Router, private _equiposService: EquiposService, 
    private latencia:LatenciaService,
    private _historialService: HistorialService) {}
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit(){
    this.cargarDatos(); 
    this.latencia.obtenerEsteEquipo().subscribe((res:any)=>{  
      this.ip_actual = res.ip; 
    });         
  }  

  async cargarDatos(){
    let equipos = await this._equiposService.obtenerEquipos();
    this.dataSource = new MatTableDataSource(equipos);
    this.dataSource.paginator = this.paginator;
  }
  
  onSelect(equipo: Equipo): void {
    this.selectedIPV4 = equipo;
  }

  actualizarEquipo(dir_ip:string){
    console.log(dir_ip);
    this._equiposService.asignarEquipoAct(dir_ip);    
    this.router.navigate(['/actualizar-equipo/']);
  }

   eliminarEquipo(dir:string) {
    this._equiposService.eliminarEquipo(dir).subscribe(
      mensaje => {
        if (mensaje.msg === "success"){
          Swal.fire({
            title: "Eliminado",
            icon: "success"
          });  
          this.cargarDatos();
          
        } else 
          Swal.fire({
            title: "Error",
            icon: "error"
          });      
      }
    )
      
  }

  agregarEquipo(){    
    
    this._equiposService.registrarEquipo(this.agregarEquipoForm.value.dir, this.agregarEquipoForm.value.nombre).subscribe(
      mensaje => {
        if (mensaje.msg === "success"){
          Swal.fire({
            title: "Agregado",
            icon: "success"
          });  
          this.cargarDatos();
          
        } else 
          Swal.fire({
            title: "Error",
            icon: "error"
          });      
      }
    )
  }

  pruebaLatencia(dir_ip:string){
    this._equiposService.probarLatencia(dir_ip).subscribe(
      resp => {
        if (resp.msg === "success"){
          Swal.fire({
            title: "OK",
            icon: "success"
          });          
          
        } else 
          Swal.fire({
            title: "Falló",
            icon: "error"
          });           
        // agregar al historial
        this._historialService.agregarRegistro(this.ip_actual, dir_ip).subscribe();
      },
      err => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: err
        }); 
      }
    );    

  }



}
