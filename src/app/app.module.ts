import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionEquiposComponent } from './modules/gestion-equipos/gestion-equipos.component';
import { InicioSesionComponent } from './modules/inicio-sesion/inicio-sesion.component';
import { NgFor, NgIf} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActualizarEquipoComponent } from './modules/actualizar-equipo/actualizar-equipo.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HttpClientModule } from "@angular/common/http";
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    GestionEquiposComponent,
    InicioSesionComponent,
    ActualizarEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    // SweetAlert2Module.forRoot()
    NgxBootstrapIconsModule.pick(allIcons),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
