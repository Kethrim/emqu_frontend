import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  adminForm = new FormGroup({
    correo: new FormControl(),
    contra: new FormControl()
  });

  constructor(private router: Router,
    private _usuarioService: UsuariosService) { 
  }
  
  onSubmit(){
    this._usuarioService.ingresarSistema(this.adminForm.value.correo, this.adminForm.value.contra).subscribe(
      resp => {
        console.log(resp);
        
        if (resp.msg == "success")
          this.router.navigate(['/gestion-equipos']);
        else 
          Swal.fire({
            title: "Datos incorrectos",
            icon: "error"
          });
      }
    )
  }
  
}
