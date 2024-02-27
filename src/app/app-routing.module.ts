import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEquiposComponent } from './modules/gestion-equipos/gestion-equipos.component';
import { InicioSesionComponent } from './modules/inicio-sesion/inicio-sesion.component';
import { ActualizarEquipoComponent } from './modules/actualizar-equipo/actualizar-equipo.component';
const routes: Routes = [
  {path: 'gestion-equipos', component: GestionEquiposComponent},
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'actualizar-equipo', component: ActualizarEquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
